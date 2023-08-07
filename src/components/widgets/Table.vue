<template>
<<<<<<< HEAD
  <p-datatable 
    :value="data.rows" 
    :responsiveLayout="isScrollable ? 'scroll' : ''" 
    :scrollable="isScrollable" 
    :scrollHeight="isScrollable ? '450px' : ''"
    :stripedRows="true" >
    <p-column
      v-for="col of data.columns"
      :field="col.key"
      :header="col.displayName"
      :key="col.key"
      :sortable="isSortable"
    >
    <template v-if="withCustomBody" #body="{data}">
      <slot :rowData="data" :currentColumnData="col" name="column">
      </slot>
    </template>
  </p-column>
  </p-datatable>
=======
<p-datatable :value="data.rows" :responsiveLayout="isScrollable ? 'scroll' : ''" :scrollable="isScrollable" :scrollHeight="isScrollable ? '400px' : ''">
    <p-column v-for="col of data.columns" :field="col.key" :header="col.displayName" :key="col.key" :sortable="true">
        <template v-if="col.key == 'id'" #body="{data}">
            <a href="">
                <span>{{ data.id }}</span>
            </a>
        </template>

        <template v-else-if="col.key == 'status'" #body="{data}">
            <span :class="getStatusClass(data.status)">{{ getStatusName(data.status) }}</span>
        </template>

        <template v-else-if="col.key == 'task_type'" #body="{data}">
            <span>{{ getTaskTypeName(data.task_type) }}</span>
        </template>

        <template v-else-if="col.key == 'dataset'" #body="{data}">
            <span>{{ checkDatasetnullity(data.dataset) }}</span>
        </template>

        <template v-else-if="col.key == 'time_submitted'" #body="{data}">
            <span>{{ convertTimestampToDateAndHour(data.time_submitted) }}</span>
        </template>

        <template v-else-if="col.key == 'processing_time'" #body="{data}">
            <span>{{ convertSecondsToHoursMinutesSeconds(data.processing_time) }}</span>
        </template>

        <template v-else-if="col.key == 'params'" #body="{data}">
            <span>{{ getParamsbyTaskType(data) }}</span>
        </template>

        <template v-else-if="col.key == 'actions'" #body="{data}">
            <button v-if="data.status === 3" class="btn btn-primary btn-sm m-1" @click="performAction(data.id)">
                Perform Action
            </button>
            <button v-if="data.status === 3 || data.status === 4" class="btn btn-danger btn-sm m-1" @click="deleteJob(data.id)">
                Remove Job
            </button>
            <!-- <Button label="Delete job" icon="pi pi-trash" /> -->
            <!-- <button class="btn btn-danger btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="Delete">Delete job<i class="bi bi-trash"></i></button> -->

        </template>

        <template v-else-if="col.key == 'datasetActions'" #body="{data}">
            <!-- For each row, we need to render a button for each action -->
            <span v-for="action of data.datasetActions" :key="action.name">
                <button :class="'btn '+ action.class + ' m-1'" @click="action.action(data.id)"> {{ action.name }} </button>
            </span>
        </template>

        <template v-else-if="col.key == 'model_action'" #body="{data}">
            <!-- For each row, we need to render a button for each action -->
            <div v-for="action of data.model_action" :key="action.name" class="d-flex w-100 flex-column justify-content-between align-items-center">
                <button id="model-action-button" :class="'btn btn-sm '+ action.styleClass" @click="action.action(data.id)"> {{ action.name }} </button>
            </div>
        </template>

        <template v-else-if="col.key == 'model_params'" #body="{data}">
            <div id="model-params-list" class="overflow-auto">
                <ul v-if="data.model_task_type['id'] == 2" class="list-group">
                    <li v-for="[idx, params] of data.model_params.entries()" :key="idx" class="list-group-item d-flex flex-column justify-content-center align-items-center">
                        <div v-for="param of Object.keys(params)" :key="param" class="d-flex w-100 justify-content-between align-items-center">
                            <h6 id="param-key">{{ param }}</h6>
                            <span id="param-value" class="badge rounded-pill bg-secondary">{{ params[param] }}</span>
                        </div>
                    </li>
                </ul>
                <ul v-else-if="data.model_task_type['id'] == 1" class="list-group">
                    <li v-for="param of Object.keys(data.model_params)" :key="param" class="list-group-item d-flex justify-content-between align-items-center">
                        <h6 id="param-key">{{ param }}</h6>
                        <span v-if="param === 'features' && JSON.parse(data.model_params[param].use === false)" id="param-value" class="badge rounded-pill bg-secondary">NO</span>
                        <span v-else-if="param === 'features' && JSON.parse(data.model_params[param].use === true)" id="param-value" class="badge rounded-pill bg-secondary">{{Object.keys(data.model_params[param])[1]}}: {{ data.model_params[param][Object.keys(data.model_params[param])[1]] }}</span>
                        <span v-else id="param-value" class="badge rounded-pill bg-secondary">{{ data.model_params[param] }}</span>
                    </li>
                </ul>
            </div>

        </template>

        <template v-else-if="col.key == 'model_metrics'" #body="{data}">
            <div id="model-metrics-list" class="overflow-auto">
                <ul v-if="data.model_task_type['id'] == 2" class="list-group">
                    <li v-for="[idx, metrics] of data.model_metrics.entries()" :key="idx" class="list-group-item d-flex flex-column justify-content-center align-items-center">
                        <div v-for="metric of Object.keys(metrics)" :key="metric" class="d-flex w-100 justify-content-between align-items-center">
                            <h6 id="metric-key">{{ metric }}</h6>
                            <span id="metric-value" class="badge rounded-pill bg-secondary">{{ metrics[metric] }}</span>
                        </div>
                    </li>
                </ul>
                <ul v-else-if="data.model_task_type['id'] == 1" class="list-group">
                    <li v-for="metric of Object.keys(data.model_metrics)" :key="metric" class="list-group-item d-flex justify-content-between align-items-center">
                        <h6 id="metric-key">{{ metric }}</h6>
                        <span id="metric-value" class="badge rounded-pill bg-secondary">{{ data.model_metrics[metric] }}</span>
                    </li>
                </ul>
            </div>
        </template>

        <template v-else-if="col.key == 'model_id'" #body="{data}">
            <h6 style="font-size: 0.9rem">{{ data.model_id }}</h6>
        </template>

        <template v-else-if="col.key == 'type'" #body="{data}">
            <h6 style="font-size: 0.9rem">{{ data.type }}</h6>
        </template>

        <template v-else-if="col.key == 'model_dataset'" #body="{data}">
            <h6 style="font-size: 0.9rem">{{ data.model_dataset }}</h6>
        </template>

        <template v-else-if="col.key == 'model_job_id'" #body="{data}">
            <h6 style="font-size: 0.9rem">{{ data.model_job_id }}</h6>
        </template>

        <template v-else-if="col.key == 'job_time_submitted'" #body="{data}">
            <h6 style="font-size: 0.9rem">{{ data.model_job_id }}</h6>
        </template>

        <template v-else-if="col.key == 'job_processing_time'" #body="{data}">
            <h6 style="font-size: 0.9rem">{{ data.model_job_id }}</h6>
        </template>

    </p-column>
</p-datatable>
>>>>>>> b5b3359 (#72 added some features on page)
</template>

<script>
import axios from 'axios'
import {
    TableInput
} from "./table-input";

export default {
  props: {
    data: TableInput,
    isScrollable: {
      type: Boolean,
      default: true,
      required: false,
    },
<<<<<<< HEAD
    isSortable: {
      type: Boolean,
      default: true,
      required: false,
    },
    withCustomBody: {
      type: Boolean,
      default: false,
      required: false,
=======
    data() {
        return {
            tableData: this.data,
        };
    },
    methods: {
        debug() {
            console.debug(this.data);
        },
        getStatusClass(status) {
            if (status == 1) return 'badge bg-warning';
            if (status == 2) return 'badge bg-info';
            if (status == 3) return 'badge bg-success';
            if (status == 4) return 'badge bg-danger';
        },
        getStatusName(status) {
            if (status == 1) return 'Pending';
            if (status == 2) return 'In progress';
            if (status == 3) return 'Finished';
            if (status == 4) return 'Error';
        },
        getTaskTypeName(task_type) {
            if (task_type == 1) return 'Pipeline';
            if (task_type == 2) return 'CSCL';
            if (task_type == 3) return 'Predict';
            if (task_type == 4) return 'Indices';
            if (task_type == 5) return 'Offensive';
            if (task_type == 6) return 'Sentiment';
            if (task_type == 7) return 'Diacritics';
            if (task_type == 8) return 'Answer generation';
            if (task_type == 9) return 'Test generation';
        },
        convertTimestampToDateAndHour(timestamp) {
            const milliseconds = timestamp * 1000; // Convert timestamp to milliseconds
            const dateObject = new Date(milliseconds);

            // Extract date and time components
            const year = dateObject.getFullYear();
            const month = String(dateObject.getMonth() + 1).padStart(2, '0');
            const day = String(dateObject.getDate()).padStart(2, '0');
            const hours = String(dateObject.getHours()).padStart(2, '0');
            const minutes = String(dateObject.getMinutes()).padStart(2, '0');
            const seconds = String(dateObject.getSeconds()).padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;
            const formattedTime = `${hours}:${minutes}:${seconds}`;

            return `${formattedDate} ${formattedTime}`;
        },
        convertSecondsToHoursMinutesSeconds(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor(seconds % 3600 / 60);
            const seconds_ = Math.floor(seconds % 3600 % 60);

            return `${hours}h ${minutes}m ${seconds_}s`;
            // var mmssFormat = new Date(seconds * 1000).toISOString().substr(14, 5);
            // return mmssFormat;
        },
        checkDatasetnullity(dataset) {
            if (dataset == null)
                return '-';
            else
                return dataset.name;
        },
        getParamsbyTaskType(data) {
            if (data.dataset != null)
                return '-';
            else {
                if (data.task_type == 3)
                    return 'Model: ' + data.params.model
            }
        },
        performAction(id) {
            // Perform your desired action here, e.g., show a dialog, open a modal, etc.
            // You can use the "id" parameter to identify the row or data related to the clicked action.
            console.log(`Performing action for id: ${id}`);

        },
        deleteJob(id) {
            // Perform the job deletion here based on the "id" parameter
            console.log('Deleting job with id: ${id}');

            // Make a POST request to the API endpoint to delete the job
            const apiUrl = `https://readerbench.com/api/v2/services/jobs/${id}/delete`;
            axios.post(apiUrl)
                .then((response) => {
                    console.log(response.data); // You can handle the response here if needed
                    if (response.data.success) {
                        // this.fetchDataAndUpdate();
                        const index = this.tableData.rows.findIndex((row) => row.id === id);

                        // If the index is found, remove the row from the tableData
                        if (index !== -1) {
                            this.tableData.rows.splice(index, 1);
                        }

                        // Optionally, you can perform any other actions after deleting the job,
                        // such as showing a success message or taking any other appropriate action.
                        console.log(`Job with id ${id} deleted successfully.`);
                    }
                })
                .catch((error) => {
                    console.error('Error deleting job:', error);
                    // Handle the error if the API call fails.
                });
        },
        fetchDataAndUpdate() {
            // Perform the API call to fetch the updated data
            // Replace the following placeholder URL with your actual API endpoint to fetch the updated data
            const updatedDataUrl = 'https://readerbench.com/api/v2/services/jobs';

            // Make the POST request to fetch the updated data
            axios.post(updatedDataUrl)
                .then((response) => {
                    // Assuming the response.data contains the updated data in the expected format
                    const updatedData = response.data;

                    // Update the "data" prop with the new data
                    // Assuming you have a prop named "data" that contains the table data
                    this.tableData = updatedData;

                    // Optionally, you can perform any other actions after updating the data,
                    // such as showing a success message or refreshing the datatable to reflect the changes.
                    console.log('Data updated successfully:', updatedData);
                })
                .catch((error) => {
                    console.error('Error fetching updated data:', error);
                    // Handle the error if the API call to fetch updated data fails.
                    // You can display an error message or take any other appropriate action.
                });
        },
>>>>>>> b5b3359 (#72 added some features on page)
    },
  },
  data() {
    return {};
  },
};
<<<<<<< HEAD
</script>
=======
</script>

<style scoped>
#model-metrics-list {
    max-width: 300px;
    max-height: 95px;
}

#model-params-list {
    max-width: 300px;
    max-height: 95px;
}

#model-params-list h6 {
    font-size: 0.8rem;
}

#model-params-list span {
    font-size: 0.65rem;
}

#model-metrics-list h6 {
    font-size: 0.8rem;
}

#model-metrics-list span {
    font-size: 0.65rem;
}

#param-value {
    width: 50%;
    overflow-x: hidden;
}

#metric-value {
    width: 50%;
    overflow-x: hidden;
}

#param-key {
    width: 50%;
    overflow-x: hidden;
    padding-top: 2%;
}

#metric-key {
    width: 50%;
    overflow-x: hidden;
    padding-top: 2%;
}

#model-action-button {
    font-size: 0.7rem;
    padding: 0.4rem;
    width: 70%;
}
</style>
>>>>>>> b5b3359 (#72 added some features on page)
