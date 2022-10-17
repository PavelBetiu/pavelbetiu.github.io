<template>
<div class="row pb-6">
    <div class="col d-flex justify-content-end pr-5">

        <div class="image">
            <img :src="require(`../assets/images/${img}`)" alt="ates" class="shadow-xl rounded zoom" />
            <div class="image-overlay rounded bg-gradient-primary">
                <div class="image-description">{{img_desc}}</div>
            </div>
        </div>
    </div>
    <div class="col col-3">
        <div class="row">
            <div class="col">
                <h6 class="card-title d-block text-darker pt-5 px-0">
                    {{title}}
                </h6>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <a :href="link">
                    <button type="button" class="btn btn-outline-primary btn-lg m-3 shadow-pop">VIEW</button>
                </a>
            </div>
        </div>
    </div>
    <div class="col ">
        <div class="project-description">
            <p class="h6 text-center ">
                {{desc}}
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProjectSingle',
    components: {},
    props: ['title', 'link', 'img', 'desc', 'img_desc'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.image {
    width: 450px;
    height: 300px;
    margin: 0 auto;
    object-position: center;
    transition: transform 0.15s;
}

.image:hover {
    transform: scale(1.05);
}

.zoom {
    width: 450px;
    height: 300px;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 450px;
    height: 300px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
}

.image-overlay>* {
    transform: translateY(100px);
    transition: transform 0.25s;
    opacity: 1;
}

.image-overlay:hover {
    opacity: 0.8;
}

.image-overlay:hover>* {
    transform: translateY(0);
}

.image-description {
    font-weight: bold;
    padding: 0% 5% 5% 8%;
}

.project-description {
    height: 300px;
    overflow: auto;
    display: block;
    padding: 11% 6% 0% 0%;
    margin: 0% 6% 0% 0%;
    opacity: 0.6;
}
</style>
