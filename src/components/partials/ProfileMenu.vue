<template>
<div class="profilemenu">
    <div>
        <a @click="toggle">
            <img src="@/assets/images/anonymous.jpg" class="avatar avatar-sm me-3">
        </a>
    </div>
    <TieredMenu id="overlay_tmenu" ref="menu" :model="items" :popup="true"/>
</div>
</template>

<!-- <template>
    <div class="profile-menu">
      <div class="profile-picture">
        <img src="@/assets/images/anonymous.jpg" class="avatar avatar-sm me-3" alt="Profile Picture">
      </div>
      <div class="profile-menu-items">
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <a href="#" @click="handleClick(item.id)">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template> -->

<script>
import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import {
    ref
} from 'vue';

export default {
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
                    separator: true
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
}
</script>

<!-- <script>
export default {
  name: 'ProfileMenu',
  data() {
    return {
      userName: 'John Doe',
      menuItems: [
        { id: 1, name: 'Profile' },
        { id: 2, name: 'Settings' },
        { id: 3, name: 'Logout' }
      ]
    }
  },
  methods: {
    handleClick(id) {
      // Handle click on menu item with id passed as argument
    }
  }
}
</script> -->

<style>
/* .profile-menu {
  display: flex;
  align-items: center;
}

.profile-picture {
  margin-right: 10px;
}

.profile-name {
  font-weight: bold;
}

.profile-menu-items {
  position: absolute;
  display: none;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  padding: 10px 0;
}

.profile-menu-items ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.profile-menu-items li {
  padding: 10px 20px;
}

.profile-menu:hover .profile-menu-items {
  display: flex;
} */

.profilemenu {
    z-index: 2;
    position: relative;
}

</style>
