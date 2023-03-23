<template>
<div class="card p-3">
    <div class="input-group mb-6">
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

    <div class="list-group p-3">
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
        languages: Array,
        tasks: Array,
        selectedTask: Function
    },
    data() {
        return {
            langID: 1,
            tasks_with_selected_status: this.getTasksWithSelectedStatus()
        }
    },
    methods: {
        selectTask(id) {
            this.tasks_with_selected_status.forEach(task => {
                if (task.id == id) {
                    task.isActive = true;
                } else {
                    task.isActive = false;
                }
            });

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
            this.tasks_with_selected_status.forEach(task => {
                if (task['languages'].includes(langID)) {
                    tasks.push(task);
                }
            });
            return tasks;
        },
        getTasksWithSelectedStatus() {
            let tasks = [];
            this.tasks.forEach(task => {
                let taskWithSelectedStatus =
                {
                    id: task.id,
                    name: task.name,
                    isActive: false,
                    languages: task.languages
                }
                tasks.push(taskWithSelectedStatus);
            });

            return tasks;
        }
    }
};
</script>
