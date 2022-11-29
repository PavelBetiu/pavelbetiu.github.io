<template>
<nav class="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
    <div class="container-fluid px-0">
        <a class="navbar-brand font-weight-bolder ms-sm-3" href="/" rel="tooltip" title="ReaderBench" data-placement="bottom">
            <img :src="require('@/assets/images/RB-name-only.svg')" alt="" style="width: 120px; height: 35px; " />
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
                  <!-- <button type="menu" label="menu" class="btn btn-sm btn-outline-primary btn-round mb-0 me-1 mt-2 mt-md-0" @click="toggle">User profile</button> -->
                    <Button type="button" label="Toggle" @click="toggle()" aria-haspopup="true" aria-controls="overlay_tmenu" />
                    <TieredMenu id="overlay_tmenu" ref="menu" :model="items" :popup="true" />
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

export default {
    name: "Nav",
    data() {
        return {
            items: [{
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [{
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [{
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [{
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [{
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus',

                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus',

                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [{
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [{
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [{
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [{
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [{
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }]
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        }
    },
    computed: {
        isAuthenticated: function () {
            return auth.isAuthenticated();
        },
    },
    methods: {
        logout() {
            auth.logout();
        },
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    },
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
