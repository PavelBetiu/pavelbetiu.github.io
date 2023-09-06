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
                        <option value="-1" disabled selected>Click to select</option>
                        <option v-for="{ id, label } of languages" :key="id" :value="id" >{{ label }}</option>
                    </select>
                </div>
            </div>
    
        </div>
    
        <div class="row w-100">
            <div class="col-12 ml-3">
                <label>Available tasks:</label>
            </div>
        </div>
        <div class="row w-100">
            <div class="col-12">
                <select class="form-control" name="language-button" id="language-button" v-model="langID">
                    <option value="-1" disabled selected>Click to select</option>
                    <option v-for="{ id, label } of languages" :key="id" :value="id" >{{ label }}</option>
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
        <a v-for="{id, name, isActive} of tasksByLanguage" :key="id" href="javascript:;" @click="selectTask(id)" :class="'list-group-item list-group-item-action ' + active(isActive)">
            {{ name }}
        </a>
    </div>
</div>
</template>

<style>

</style>

<script>
export default {
    name: 'LanguageDropdown',
    props: {
        languages: Array,
        tasks: Array,
        onTaskSelect: Function,
        onLanguageSelect: Function
    },
    data() {
        return {
            langID: -1,
            selectedTaskId: -1
        }
    },
    methods: {
        selectTask(id) {
            this.selectedTaskId = id;

            this.onTaskSelect(id);
        },
        data() {
            return {
                langID: -1,
                selectedTaskId: -1
            }
        },
    },
    computed: {
        tasksByLanguage() {
            let tasks = [];
            this.tasksWithSelectedStatus.forEach(task => {
                if (task['languages'].includes(this.langID)) {
                    tasks.push(task);
                }
            },
        },
        tasksWithSelectedStatus() {
            let tasks = [];
            this.tasks.forEach(task => {
                let taskWithSelectedStatus =
                {
                    id: task.id,
                    name: task.name,
                    isActive: task.id === this.selectedTaskId,
                    languages: task.languages
                }
                tasks.push(taskWithSelectedStatus);
            });

            return tasks;
        }
    },
    watch: {
        langID: function (newVal, oldVal) {
            this.selectedTaskId = -1;
            this.onLanguageSelect(newVal);
        }
    },
};
</script>
