<template>
<nav class="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
    <div class="container-fluid px-0">
        <a class="navbar-brand font-weight-bolder ms-lg-4 ms-3 d-flex align-items-center" href="/" rel="tooltip" title="Pavel Betiu - Portfolio" data-placement="bottom">
            <img src="../../assets/images/pb-logo-modern.svg" alt="PB" style="width: 40px; height: 40px;">
        </a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </span>
        </button>
        <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
            <ul class="navbar-nav navbar-nav-hover ms-auto justify-content-end me-lg-3">

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-lg-3 me-2" href="https://github.com/PavelBetiu" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-github" class="me-1" />
                        <span class="d-none d-sm-inline text-sm z-index-1 font-weight-bold">GitHub</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon me-lg-2 me-2" href="https://www.linkedin.com/in/pavel-betiu-015289208/" target="_blank">
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
                    command: () => {
                        this.$router.push('/profile')
                    }
                },
                {
                    label: 'Datasets',
                    icon: 'pi pi-fw pi-database',
                    command: () => {
                        this.$router.push('/datasets')
                    }
                },
                {
                    label: 'Models',
                    icon: 'pi pi-fw pi-chart-bar',
                    command: () => {
                        this.$router.push('/models')
                    }
                },
                {
                    label: 'Processing Queue',
                    icon: 'pi pi-fw pi-list',
                    command: () => {
                        this.$router.push('/processing-queue')
                    }
                },
                {
                    separator: true
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-sign-out',
                    command: () => {
                        this.logout()
                    }
                }
            ],
            avatarIcon: 'pi pi-user',
            tieredMenuPassThroughOptions: {
                root: () => ({
                    style: 'background-color: #ffffffdf; position: sticky; margin-top: 6.3rem; left: 79.1%; backdrop-filter: blur(12px);',
                }),
                icon: () => ({
                    class: 'text-gradient text-primary',
                }),
                label: () => ({
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
    background: rgba(255, 255, 255, 0.35) !important;
    backdrop-filter: blur(24px) !important;
    -webkit-backdrop-filter: blur(24px) !important;

    a {
        font-weight: 600;
        color: white;
        text-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);

        &.router-link-exact-active {
            color: white;
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
