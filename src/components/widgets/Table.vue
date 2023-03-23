<template>
<p-datatable :value="data.rows" :responsiveLayout="isScrollable ? 'scroll' : ''" :scrollable="isScrollable" :scrollHeight="isScrollable ? '400px' : ''">
    <p-column
      v-for="col of data.columns"
      :field="col.key"
      :header="col.displayName"
      :key="col.key"
      :sortable="true"
    >
        <template v-if="col.key == 'status'" #body="{data}">
            <span :class="getStatusClass(data.status)">{{ getStatusName(data.status) }}</span>
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

		<template v-else-if="col.key == 'model_task_type'" #body="{data}">
			<h6 style="font-size: 0.9rem">{{ data.model_task_type['name'] }}</h6>
		</template>

		<template v-else-if="col.key == 'model_dataset'" #body="{data}">
			<h6 style="font-size: 0.9rem">{{ data.model_dataset }}</h6>
		</template>

		<template v-else-if="col.key == 'model_job_id'" #body="{data}">
			<h6 style="font-size: 0.9rem">{{ data.model_job_id }}</h6>
		</template>

    </p-column>
</p-datatable>
</template>

<script>
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
    },
    data() {
        return {};
    },
    methods:{
        debug(){
            console.debug(this.data);
        },
        getStatusClass(status){
            if (status == 1) return 'badge bg-warning';
            if (status == 2) return 'badge bg-info';
            if (status == 3) return 'badge bg-success';
            if (status == 4) return 'badge bg-danger';
        },
        getStatusName(status){
            if (status == 1) return 'Pending';
            if (status == 2) return 'In progress';
            if (status == 3) return 'Finished';
            if (status == 4) return 'Error';
        },
        getTaskTypeName(task_type) {
            if (task_type == 1) return 'Pipeline';
            if (task_type == 2) return 'CSCL';
        }
    },
};
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
