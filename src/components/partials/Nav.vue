<template>
<nav class="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
    <div class="container-fluid px-0">
        <a class="navbar-brand font-weight-bolder ms-sm-3" href="/" rel="tooltip" title="ReaderBench" data-placement="bottom">
            <img :src="require('@/assets/images/readerbench.png')" alt="" style="width: 35px; heght: 35px; " />
        </a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </span>
        </button>
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
            <ul class="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="/">
                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home">Home</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="/projects">
                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Projects">Projects</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="/services">
                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Services">Services</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="/people">
                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="People">People</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="/contact">
                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact">Contact</p>
                    </a>
                </li>

                <li class="nav-item ms-lg-auto">
                    <a class="nav-link nav-link-icon me-2" href="https://huggingface.co/readerbench" target="_blank">
                        <!-- <i class="fa fa-github me-1"></i> -->
                        <img src="../../assets/images/huggingface_logo-noborder.svg" style="width:20px;height:20px;">
                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github">Hugging Face</p>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="https://github.com/readerbench" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" />&nbsp;
                        <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github">Github</p>
                    </a>
                </li>

                <li class="nav-item my-auto ms-3 ms-lg-0" v-if="!isAuthenticated">
                    <a href="/login" class="btn btn-sm btn-outline-primary btn-round mb-0 me-1 mt-2 mt-md-0">Log In</a>
                </li>
                <li class="nav-item my-auto ms-3 ms-lg-0" v-if="isAuthenticated">
                    <div class="card flex justify-content-center">
                        <a class="user-options-menu">
                            <div class="flex-auto">
                                <Avatar class="text-gradient text-primary" :icon="avatarIcon" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
                            </div>
                            <div class="position-fixed">
                                <TieredMenu 
                                    :baseZIndex="1" 
                                    ref="menu" 
                                    id="overlay_tmenu" 
                                    appendTo="a.user-options-menu" 
                                    :pt="tieredMenuPassThroughOptions" 
                                    :model="items" 
                                    @before-show="setAvatarIcon('pi pi-angle-double-down')" 
                                    @before-hide="setAvatarIcon('pi pi-user')"
                                    popup />
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import auth from "@/services/auth";
import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

import {
    inject
} from 'vue';
import {
    TOAST_SERVICE
} from "@/services/toast-service.interface"

export default {
    name: "Nav",
    data() {
        return {
            toastService: inject(TOAST_SERVICE),
            items: [{
                    label: 'Profile',
                    icon: 'pi pi-fw pi-user',
                    command: (event) => {
                        this.$router.push('/profile')
                    }
                },
                {
                    label: 'Datasets',
                    icon: 'pi pi-fw pi-database',
                    command: (event) => {
                        this.$router.push('/datasets')
                    }
                },
                {
                    label: 'Models',
                    icon: 'pi pi-fw pi-chart-bar',
                    command: (event) => {
                        this.$router.push('/models')
                    }
                },
                {
                    label: 'Processing Queue',
                    icon: 'pi pi-fw pi-list',
                    command: (event) => {
                        this.$router.push('/processing-queue')
                    }
                },
                {
                    separator: true
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-sign-out',
                    command: (event) => {
                        this.logout()
                    }
                }
            ],
            avatarIcon: 'pi pi-user',
            tieredMenuPassThroughOptions: {
                root: ({
                    props,
                    state,
                    context
                }) => ({
                    style: 'background-color: #ffffffdf; top:4.2rem; left:-10rem',
                }),
                icon: ({
                    props,
                    state,
                    context
                }) => ({
                    class: 'text-gradient text-primary',
                }),
                label: ({
                    props,
                    state,
                    context
                }) => ({
                    class: 'text-sm font-weight-bold',
                    style: 'color: var(--bs-nav-link-color); font-size: 1.5rem; '
                }),
            },
        };
    },
    computed: {
        isAuthenticated: function () {
            return auth.isAuthenticated();
        },
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        logout() {
            auth.logout(this.onLogoutSuccess);
        },
        onLogoutSuccess(message) {
            this.toastService && this.toastService.info('See you later!', message);
        },
        setAvatarIcon(icon) {
            this.avatarIcon = icon
        }
    }
};
</script>

<style lang="scss" scoped>
nav {
    margin-top: 25px;
    margin-bottom: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #d88d00;
        }
    }
}

.user-options-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>

<style>
.p-tieredmenu:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #ffffffdf;
    position: absolute;
    top: -1rem;
    left: 80%;
}
</style>
