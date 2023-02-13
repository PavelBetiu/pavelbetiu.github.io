<template>
	<div class="w-100 p-5 my-8 mx-6">
		<div class="row w-100">
			<LanguageDropdown class="w-25" :selectedTask="selectTask"></LanguageDropdown>
		</div>
	</div>
	<!--de gasit o alta varianta in afara de br-->
</template>

<script>
import axios from 'axios';
import LanguageDropdown from '@/components/text-analysis/LanguageDropdown.vue';

export default {
	name: "TextAnalysisView",
	props: {

	},
	components: {
		//TODO: add components here: language dropdown, task selector and text input
		LanguageDropdown
	},
	methods: {
		selectTask(id) {
			this.currentTask = id;
			alert(this.currentTask)
		},
		async processText() {
			await axios.post('http://localhost:5000/api/text-analysis', {
				text: this.text,
				task: this.currentTask
			})
		}
	},
	data() {
		return {
			currentTask: 0,
			text: "",

			//TODO: get this from backend
			tasks: [
				{
					id: 0,
					name: 'Sentiment Analysis',
					lables: ['Other', 'Abuses', 'Profanity', 'Insult'],
					languages: [1,2]
				},
				{
					id: 1,
					name: 'Textual Complexity',
					lables: ['low', 'medium', 'high'],
					languages: [3,4]
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