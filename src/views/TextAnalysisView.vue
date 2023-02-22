<template>
	<div class="p-5 mt-8 mx-6 w-100">
		<div class="row">
			<div class="col-4">
				<div class="w-75 mt-5 ml-4">
					<LanguageDropdown :tasks="tasks" :languages="languages" :selectedTask="selectTask"/>
				</div>
			</div>
			<div class="col-8 d-flex justify-content-center">
				<div v-if="taskSelected" class="w-75">
					<TaskInputForm :task="getTaskById(currentTask)"/>
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
			this.currentTask = id;
			this.taskSelected = true;
		},
		async processText() {
			// TODO: send text to backend
			await axios.post('http://localhost:5000/api/text-analysis', {
				text: this.text,
				task: this.currentTask
			})
		},
		getTaskById(id) {
			return this.tasks.find(task => task.id === id);
		},
	},
	data() {
		return {
			currentTask: 0,
			text: "",
			taskSelected: false,

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
					name: 'Task2',
					labels: ['low', 'medium', 'high'],
					languages: [5,6]
				},
				{
					id: 4,
					name: 'Task3',
					labels: ['Other', 'Abuses', 'Profanity', 'Insult'],
					languages: [7,8]
				},
				{
					id: 5,
					name: 'Task4',
					labels: ['low', 'medium', 'high'],
					languages: [5,4,6]
				},
				{
					id: 6,
					name: 'Task5',
					labels: ['Other', 'Abuses', 'Profanity', 'Insult'],
					languages: [2,5,7,4]
				},
				{
					id: 7,
					name: 'Task6',
					labels: ['low', 'medium', 'high'],
					languages: [5,6,8]
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

<style>

</style>