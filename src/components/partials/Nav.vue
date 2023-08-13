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

                <li class="nav-item dropdown dropdown-hover mx-2">
                    <a class="font-weight-bold nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="javascript:;" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                      <img src="../../assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1">
                    </a>
                    <div class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                      <div class="d-none d-lg-block">
                        <div class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
                          <a href="/services" class="dropdown-item border-radius-md">
                            <div class="d-inline-block">
                              <div class="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                                <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <title>shop </title>
                                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                      <g transform="translate(1716.000000, 291.000000)">
                                        <g transform="translate(0.000000, 148.000000)">
                                          <path
                                            d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" opacity="0.598981585"></path>
                                          <path
                                            d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <span>All Services</span>
                          </a>
                        </div>
                        <a href="/services/cscl" class="dropdown-item border-radius-md">
                          <span class="ps-3">CSCL</span>
                        </a>
                        <a href="/services/question-generation" class="dropdown-item border-radius-md">
                          <span class="ps-3">Question Generation</span>
                        </a>
                        <a href="/services/text-analysis" class="dropdown-item border-radius-md">
                          <span class="ps-3">Text Analysis</span>
                        </a>
                      </div>
                    </div>
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
                        <a style="overflow: auto;">
                            <div class="flex-auto">
                                <Avatar class="text-gradient text-primary" :icon="avatarIcon" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="row" style="height: 0px;" v-if="isAuthenticated">
    <div class="col-12">
        <div id="userOptionsMenu">
            <TieredMenu
                :baseZIndex="1"
                ref="menu"
                id="overlay_tmenu"
                appendTo="#userOptionsMenu"
                :pt="tieredMenuPassThroughOptions"
                :model="items"
                @before-show="setAvatarIcon('pi pi-angle-double-down')"
                @before-hide="setAvatarIcon('pi pi-user')"
                popup />
        </div>
    </div>
</div>
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
                    style: 'background-color: #ffffffdf; position: sticky; margin-top: 6.3rem; left: 79.1%; backdrop-filter: blur(12px);',
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
