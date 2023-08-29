<template>
	<div :class="$style['body']"> 
	<div class="p-5 mt-5 mx-6 w-100">
		<div class="row">
			<div class="col-4">
				<div class="w-75 mt-5 ml-4">
					<LanguageDropdown :tasks="tasks" :languages="languages" :onLanguageSelect="onLanguageSelect" :onTaskSelect="onTaskSelect"/>
				</div>
			</div>
			<div class="col-8 d-flex justify-content-center">
				<div v-if="isTaskSelected" class="w-75" :key="refresh">
					<TaskInputForm v-if="selectedTaskId === 3" :title="selectedTask.name" :processText="processText" :clearForm="clearForm">
						<template v-if="result !== null" #body>
							<div class="form-control diacritics-result-container">
								<div v-html="highlightingDiacritics(text, result.text)"></div>
							</div>
						</template>
					</TaskInputForm>

					<TaskInputForm v-else :title="selectedTask.name" :processText="processText"/>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import axios from 'axios';
import LanguageDropdown from '@/components/text-analysis/LanguageDropdown.vue';
import TaskInputForm from '@/components/text-analysis/TaskInputForm.vue';
import {
	TEXT_ANALYSIS_SERVICE
} from '@/services/text-analysis-service.interface'
import {
	TOAST_SERVICE
} from '@/services/toast-service.interface'

import {
	inject
} from 'vue';

export default {
	name: "TextAnalysisView",
	components: {
		LanguageDropdown,
		TaskInputForm
	},
	data() {
		return {
			text: "",
			langID: -1,
			selectedTaskId: -1,
			isTaskSelected: false,
			result: null,
			
			taService: null,
			tasks: null,
			languages: null,

			toastService: null,

			refresh: 0
		};
	},
	created() {
		this.taService = inject(TEXT_ANALYSIS_SERVICE)
		this.toastService = inject(TOAST_SERVICE)
		this.tasks = [
				{
					id: 0,
					name: 'Sentiment Analysis',
					languages: [3],
					process: this.taService.sentimentAnalysis,
					payloadTemplate: {
						text: null
					} 
				},
				{
					id: 1,
					name: 'Textual Complexity',
					languages: [1,2,3,4,5,6,7,8],
					process: undefined
				},
				{
					id: 2,
					name: 'Offensive Language',
					languages: [3],
					process: this.taService.offensiveLanguage,
					payloadTemplate: {
						text: null
					} 
				},
				{
					id: 3,
					name: 'Diacritics Restoration',
					languages: [3],
					process: this.taService.restoreDiacritics,
					payloadTemplate: {
						text: null
					}
				},
				{
					id: 4,
					name: 'Keyword Extraction',
					languages: [3,8],
					process: undefined,
					payloadTemplate: {
						text: null,
						lang: null
					}
				}
			]

			this.languages = [
				{
					id: 1,
					label: "EN"
				},
				{
					id: 2,
					label: "FR"
				},
				{
					id: 3,
					label: "RO"
				},
				{
					id: 4,
					label: "ES"
				},
				{
					id: 5,
					label: "DE"
				},
				{
					id: 6,
					label: "RU"
				},
				{
					id: 7,
					label: "IT"
				},
				{
					id: 8,
					label: "NL"
				}
			]
	},
	methods: {
		onLanguageSelect(id) {
			this.langID = id;
			this.selectedTaskId = -1;
			this.isTaskSelected = false;
		},
		onTaskSelect(id) {
			this.selectedTaskId = id;
			this.isTaskSelected = true;

			this.clearForm();
		},
		async processText(text) {
			if (this.selectedTask.process === undefined) {
				this.error("Error", "This task is not available yet");

				return false;
			}

			let trimmedText = text.trim();

			if (trimmedText.length == 0) {
				this.error("Error", "Please enter some text");

				return false;
			}

			this.text = text;

			let payloadTemplate = this.selectedTask.payloadTemplate;
			
			payloadTemplate.text = this.text;

			if ('lang' in payloadTemplate) {
				payloadTemplate.lang = this.langID;
			}

			try {
				this.info("Sent for processing", "Please wait...")
				this.result = await this.selectedTask.process(payloadTemplate);
				this.success("Task completed", "Please check the results down below")
			} catch (error) {
				this.error("Error", error.message);

				// reset the form
				this.clearForm();
			}

			this.info("Result", JSON.stringify(this.result));

			return true;
		},
		clearForm() {
			this.result = null;
			this.refresh = (this.refresh + 1) % 2;
		},
		highlightingDiacritics(before, after) {
			let hidxs = []; 

			let startWordIdx = -1;
			let endWordIdx = -1;
			let isDiff = false;
			for (let i = 0; i < before.length; i++) {
				if (' \t\n.,'.includes(before[i])) {
					if (startWordIdx != -1) {
						endWordIdx = i - 1;

						if (isDiff) {
							hidxs.push({
								start: startWordIdx,
								end: endWordIdx
							});
						}

						startWordIdx = -1;
						endWordIdx = -1;
						isDiff = false;
					}
				} else {
					if (startWordIdx == -1) {
						startWordIdx = i;
					} else {
						if (before[i] != after[i]) {
							isDiff = true;
						}
					}
				}
			}

			// check if the last word is different
			if (startWordIdx != -1) {
				endWordIdx = before.length - 1;

				if (isDiff) {
					hidxs.push({
						start: startWordIdx,
						end: endWordIdx
					});
				}
			}

			let afterHtml = "";
			let currentHidx = 0; // current highlighting index
			for (let i = 0; i < after.length; i++) {
				if (currentHidx >= hidxs.length) {
					afterHtml += after[i];
					continue;
				}

				if (i == hidxs[currentHidx].start) {
					afterHtml += "<span class='diacritics-highlight'>";
				} else if (i == hidxs[currentHidx].end) {
					afterHtml += after[i];
					afterHtml += "</span>";
					currentHidx++;
					continue;
				}

				afterHtml += after[i];
			}

			return afterHtml;
		},
        success(header, footer) {
            this.toastService && this.toastService.success(footer, header)
        },
        info(header, footer) {
            this.toastService && this.toastService.info(footer, header)
        },
        error(header, footer) {
            this.toastService && this.toastService.error(footer, header, -1)
        },
	},
	computed: {
		selectedTask() {
			return this.tasks.find(task => task.id === this.selectedTaskId);
		}
	}
};
</script>

<style module>
    .body {
        background-color: #f8f9fa;
    }
    
</style>

<style>
.diacritics-highlight {
	background-color: #a600ff;
	color: #ffffff;
	border-radius: 0.25rem;
	padding: 0.1rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

.diacritics-result-container {
	min-height: 23rem;
}
</style>