<template>
	<div :class="$style['body']"> 
	<div class="p-5 mt-8 mx-6 w-100">
		<div class="row">
			<div class="col-4">
				<div class="w-75 mt-5 ml-4">
					<LanguageDropdown :tasks="tasks" :languages="languages" :onLanguageSelect="onLanguageSelect" :onTaskSelect="onTaskSelect"/>
				</div>
			</div>
			<div class="col-8 d-flex justify-content-center">
				<div v-if="isTaskSelected" class="w-75">
					<TaskInputForm :task="getTaskById(selectedTaskId)" :langID="langID"/>
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

export default {
	name: "TextAnalysisView",
	components: {
		LanguageDropdown,
		TaskInputForm
	},
	methods: {
		selectTask(id) {
			this.selectedTaskId = id;
			this.isTaskSelected = true;
		},
		async processText() {
			// TODO: send text to backend
			await axios.post('http://localhost:5000/api/text-analysis', {
				text: this.text,
				task: this.selectedTaskId,
			})
		},
		getTaskById(id) {
			return this.tasks.find(task => task.id === id);
		},
		onLanguageSelect(id) {
			this.langID = id;
			this.selectedTaskId = -1;
			this.isTaskSelected = false;
		},
		onTaskSelect(id) {
			this.selectedTaskId = id;
			this.isTaskSelected = true;

		},
	},
	data() {
		return {
			selectedTaskId : 0,
			text: "",
			isTaskSelected : false,
			langID: -1,

			//TODO: get this from backend
			tasks: [
				{
					id: 0,
					name: 'Sentiment Analysis',
					labels: ['Positive', 'Negative', 'Neutral'],
					languages: [3,2]
				},
				{
					id: 1,
					name: 'Textual Complexity',
					labels: ['low', 'medium', 'high'],
					languages: [5,4]
				},
				{
					id: 2,
					name: 'Offensive Language',
					labels: ['Other', 'Abuses', 'Profanity', 'Insult'],
					languages: [3,2]
				},
				{
					id: 3,
					name: 'Diacritics Restoration',
					labels: ['low', 'medium', 'high'],
					languages: [3,6]
				},
				{
					id: 4,
					name: 'Keyword Extraction',
					labels: ['Other', 'Abuses', 'Profanity', 'Insult'],
					languages: [3,8]
				}
			],

			//TODO: get this from backend
			languages: [
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
		};
	},
};
</script>

<style module>
    .body {
        background-color: #f8f9fa;
    }
    
</style>