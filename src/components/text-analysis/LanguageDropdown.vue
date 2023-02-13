<template>
<div class="card p-4">
    <div class="input-group my-6">
        <div class="row w-100">
            <div class="col-12 ml-3">
                <label>Select language:</label>
            </div>
        </div>
        <div class="row w-100">
            <div class="col-12">
                <select class="form-control" name="language-button" id="language-button" v-model="langID">
                    <option v-for="{ id, label } of languages" :key="id" :value="id">{{ label }}</option>
                </select>
            </div>
        </div>

    </div>

    <div class="row w-100">
        <div class="col-12 ml-3">
            <label>Available tasks:</label>
        </div>
    </div>

    <div class="list-group">
        <a v-for="{id, name, isActive} of getTasksByLanguage(langID)" :key="id" href="javascript:;" @click="selectTask(id)" :class="'list-group-item list-group-item-action ' + active(isActive)">
            {{ name }}
        </a>
    </div>
</div>
</template>

<style>

</style>

<script>
import Dropdown from 'primevue/dropdown';
export default {
    name: 'LanguageDropdown',
    props: {
        //languages: Array,
        //tasks: Array,
        selectedTask: Function
    },
    data() {
        return {
            langID: 1,
            tasks: [{
                    id: 0,
                    name: "Task1",
                    isActive: false,
                    languages: [1,2]
                },
                {
                    id: 1,
                    name: "Task2",
                    isActive: false,
                    languages: [3,4]
                },
                {
                    id: 2,
                    name: "Task3",
                    isActive: false,
                    languages: [1,3]
                },
                {
                    id: 3,
                    name: "Task4",
                    isActive: false,
                    languages: [1,4]
                },
            ],

            languages: [{
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
    methods: {
        selectTask(id) {
            alert(id);

            this.tasks.forEach(task => {
                if (task.id == id) {
                    task.isActive = true;
                } else {
                    task.isActive = false;
                }
            });

            //TODO: send task id to parent component by calling a method received from parent as prop
            this.selectedTask(id);

        },
        active(isActive) {
            if (isActive) {
                return "active";
            } else {
                return "";
            }
        },
        getTasksByLanguage(langID) {
            let tasks = [];
            this.tasks.forEach(task => {
                if (task.languages.includes(langID)) {
                    tasks.push(task);
                }
            });
            return tasks;
        }
    }
};
</script>
