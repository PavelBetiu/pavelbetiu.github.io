<template>
<nav class="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
    <div class="container-fluid px-0">
        <a class="navbar-brand font-weight-bolder ms-sm-3 d-flex align-items-center" href="/" rel="tooltip" title="Pavel Betiu - Portfolio" data-placement="bottom">
            <img src="../../assets/images/pb-logo-new.svg" alt="PB" style="width: 40px; height: 40px;">
        </a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </span>
        </button>
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
            <ul class="navbar-nav navbar-nav-hover ms-auto w-100 justify-content-end">

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="https://github.com/PavelBetiu" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" class="me-1" />
                        <span class="d-none d-sm-inline text-sm z-index-1 font-weight-bold">GitHub</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-2" href="https://www.linkedin.com/in/pavel-betiu-015289208/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin" class="me-1" />
                        <span class="d-none d-sm-inline text-sm z-index-1 font-weight-bold">LinkedIn</span>
                    </a>
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

/* Enhanced Mobile Responsive */
@media (max-width: 991px) {
    nav {
        margin: 1rem !important;
        padding: 0.75rem 1rem !important;
    }
    
    .navbar-brand img {
        width: 36px !important;
        height: 36px !important;
    }
    
    .navbar-nav {
        padding-left: 0 !important;
        margin-left: 0 !important;
    }
    
    .nav-item {
        padding: 0.25rem 0;
    }
    
    .nav-link {
        padding: 0.5rem 0.75rem !important;
    }
}

@media (max-width: 767px) {
    nav {
        margin: 0.5rem !important;
        padding: 0.5rem 0.75rem !important;
    }
    
    .navbar-brand img {
        width: 32px !important;
        height: 32px !important;
    }
    
    .container-fluid {
        padding: 0 !important;
    }
}

@media (max-width: 575px) {
    .navbar-brand img {
        width: 28px !important;
        height: 28px !important;
    }
    
    .nav-link p {
        font-size: 0.875rem !important;
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
