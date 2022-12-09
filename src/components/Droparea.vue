<template>
<FileUpload @select="emitSelectEvent" @clear="emitClearEvent" :multiple="multiple" :accept="accept">
    <!-- FileUpload component has a slot named header -->
    <template #header="{ chooseCallback, clearCallback, files }">
        <div class="d-flex justify-content-start">
            <!-- chooseCallback is a function that will open the file browser and will emit the select event which will be caught by the parent component -->
            <button @click="chooseCallback()" class="btn bg-gradient-primary m-1">Choose files</Button>
            <button @click="clearCallback()" class="btn btn-outline-danger m-1" :disabled="!files || files.length === 0">Clear</Button>
        </div>
    </template>

    <!-- FileUpload component has a slot named content -->
    <template #content="{ files, removeFileCallback }">
        <!-- files points to the files array of the FileUpload component not the files array of the parent component -->
        <div v-if="files.length > 0">
            <div class="p-1">
                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-1 p-1 border border-primary">
                    <div class="p-1">
                        <img role="presentation" :alt="file.type" :src="file.objectURL" class="shadow-2 h-10 w-10 border border-info" />
                    </div>
                    <span class="font-semibold p-1">name: {{ file.name }}</span>
                    <div class="p-1">size: {{ formatSize(file.size) }}</div>

                    <div class="d-flex justify-content-center">
                        <Button icon="pi pi-times" @click="emitRemoveEvent(removeFileCallback, index)" class="p-button-outlined p-button-danger p-button-rounded" />
                    </div>

                </div>
            </div>
        </div>
    </template>

    <!-- FileUpload component has a slot named empty -->
    <template #empty>
        <p>Drag and drop files to here to upload.</p>
    </template>
</FileUpload>
</template>

<script>
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';

export default {
    name: 'Droparea',
    props: {
        multiple: {
            type: Boolean,
            default: true,
            required: false,
        },
        accept: {
            type: String,
            default: '',
            required: false,
        },
    },
    components: {
        FileUpload,
        Button
    },
    methods: {
        // Called when the user clicks the Remove button
        emitRemoveEvent(removeFileCallback, index) {
            this.$emit('droparea:remove', index);
            removeFileCallback(index);
        },

        // Called when the user selects files
        emitSelectEvent(event) {
            this.$emit('droparea:select', event);
        },

        // Called when the user clicks the Clear button
        emitClearEvent(event) {
            this.$emit('droparea:clear');
        },

        // Converts bytes to human readable format
        formatSize(bytes) {
            if (bytes === 0) {
                return '0 B';
            }

            let k = 1000,
                dm = 3,
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
    },
};
</script>
