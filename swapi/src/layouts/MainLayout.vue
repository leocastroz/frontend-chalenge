<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="tw-bg-stone-900">
        <q-btn flat dense round :icon="drawerIcon" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="tw-text-orange-400 ">
          <p class="tw-text-sm tw-font-bold">Menu</p>
        </q-toolbar-title>
        <div>developer by <a href="https://github.com/leocastroz" target="_blank" class="tw-text-orange-400 tw-px-1 tw-cursor-pointer hover:tw-text-white"> {{ name }}</a></div>
        <q-avatar>
          <img src="https://avatars.githubusercontent.com/u/72839343?v=4">
        </q-avatar>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="tw-flex tw-items-center tw-justify-center">
          <img src="../assets/images/logotype.png" alt="" width="150">
        </q-item-label>
        <NavBar v-for="link in navbarMock" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container class="bg-image">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import NavBar from 'components/NavBar.vue'
import { navbarMock } from '../mocks/navbarMock.js';

defineOptions({
  name: 'MainLayout'
})

let drawerOpen = ref(false);
let drawerIcon = ref('chevron_left');
const name = 'Leonardo Castro'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
  drawerOpen.value = !drawerOpen.value;
  drawerIcon.value = drawerOpen.value ? 'chevron_right' : 'chevron_left';
};

const $q = useQuasar()

onMounted(() => {
  $q.dialog({
    dark: true,
    title: 'Bem-vindo(a) visitante!',
    message: 'Prove que você não é um R2-D2 e Digite a palavra "starwars" para acessar o site.',
    prompt: {
      model: '',
      type: 'text'
    },
    cancel: true,
    persistent: true
  }).onOk(data => {
    if (data !== 'starwars') {
      window.open(window.location.href, '_blank');
    }
  }).onCancel(() => {
    window.open(window.location.href, '_blank');
  }).onDismiss(() => {})
})
</script>
