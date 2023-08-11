<template>
<FileUpload @select="emitSelectEvent" @clear="emitClearEvent" @remove="emitRemoveEvent" :multiple="multiple" :accept="accept" :fileLimit="fileLimit" :key="reloadKey">
    <!-- FileUpload component has a slot named header -->
    <template #header="{ chooseCallback, clearCallback, files }">
        <div class="d-flex justify-content-start">
            <!-- chooseCallback is a function that will open the file browser and will emit the select event which will be caught by the parent component -->
            <button @click="selectFiles(chooseCallback, onFileLimitExceedsCallback, files.length)" class="btn bg-gradient-primary m-1">{{chooseMessage}}</Button>
            <button @click="clearCallback()" class="btn btn-outline-danger m-1" :disabled="!files || files.length === 0">Clear</Button>
        </div>
    </template>

    <!-- FileUpload component has a slot named content -->
    <template #content="{ files, removeFileCallback }">
        <!-- files points to the files array of the FileUpload component not the files array of the parent component -->
        <div v-if="files.length > 0">
            <div class="p-1">
                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" :class="$style['uploaded_file_card']">
                    <div class="col-9 px-4 py-1">
                        <p class="font-semibold text-truncate">{{ file.name }}</p>
                        <div class="pb-1">{{ formatSize(file.size) }}</div>
                    </div>
                    <div class="d-flex justify-content-end pr-4 col-3">
                        <!-- removeFileCallback is a function that will remove the file from the files array and will emit the remove event which will be caught by the parent component -->
                        <Button icon="pi pi-times" @click="removeFileCallback(index)" class="p-button-outlined p-button-danger p-button-rounded align-self-center" />
                    </div>
                </div>
            </div>
        </div>
    </template>

    <!-- FileUpload component has a slot named empty -->
    <template #empty>
        <p>{{infoMessage}}</p>
    </template>
</FileUpload>
</template>

<script>
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';

export default {
    name: 'Droparea',
    props: {
        reloadKey: {
            type: Number,
            default: 0,
            required: false,
        },
        fileLimit: {
            type: Number,
            default: 1,
            required: false,
        },
        multiple: {
            type: Boolean,
            default: false,
            required: false,
        },
        accept: {
            type: String,
            default: '',
            required: false,
        },
        chooseMessage: {
            type: String,
            default: 'Choose files',
            required: false,
        }, 
        infoMessage: {
            type: String,
            default: 'Drag and drop files to here to upload.',
            required: false,
        },
        onFileLimitExceedsCallback: {
            type: Function,
            default: () => {console.log('File limit exceeded')},
            required: false,
        },
        isFileLengthZero: {
            type: Function,
            default: () => {console.log('File length is zero')},
            required: false,
        },
    },
    components: {
        FileUpload,
        Button
    },
    methods: {
        selectFiles(chooseFilesCallback, onFileLimitExceedsCallback, filesLength) {
            if (filesLength < this.fileLimit) {
                chooseFilesCallback();
            } else {
                onFileLimitExceedsCallback();
            }
        },

        // Called when the user clicks the Remove button
        emitRemoveEvent(event) {
            this.$emit('droparea:remove', event);
        },

        // Called when the user selects files
        emitSelectEvent(event) {
            event.originalEvent.stopPropagation();
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

<style module>
.uploaded_file_card {
    border: 2px solid #ccc;
    border-radius: 15px;
    padding: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
}

.uploaded_file_card:hover {
    border: 2px solid rgb(104, 104, 104);
}
</style>