<template>
    <div class="card mx-3 border-radius-20" style="height: 25rem;">
        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <a href="javascript:;" class="d-block mx-auto">
                <div class="bg-image hover-zoom">
                    <img :src="require(`../assets/images/${image}`)" class="max-height-200"/>
                </div>
            </a>
        </div>

        <div class="card-body pt-2">
            <a href="javascript:;" class="card-title h5 d-block text-darker">
                {{title}}
            </a>
            <div class="my-3">
                <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">Languages: </span>
                <span class="m-2" v-for="(language, i) in languages" :key="i">{{language}}</span>
            </div>
            <div class="align-items-center">
                <a v-if="active" :href="link"><button type="button" class="btn btn-outline-primary btn-sm">VIEW</button></a>
                <button v-else type="button" class="btn btn-outline-primary btn-sm" disabled>NOT YET AVAILABLE</button>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'ServiceCard',
    props: ['image', 'title', 'languages', 'link', 'active'],
};
</script>

<style scoped>
img {
    height: 100;
}
</style>