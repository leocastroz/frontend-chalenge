<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="tw-bg-stone-900">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="tw-text-orange-100 ">
          <p class="star-wars">Star Wars - api</p>
        </q-toolbar-title>

        <div>developer by <span class="tw-text-orange-400 tw-px-1"> {{ name }}</span></div>
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

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
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
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const name = 'Leonardo Castro'

const linksList = [
  {
    title: 'Home',
    caption: 'start page',
    icon: 'school',
    link: '/'
  },
  {
    title: 'Peoples',
    caption: 'Star wars - peoples',
    icon: 'group',
    link: '/peoples'
  },
  {
    title: 'Planets',
    caption: 'Star wars - planets',
    icon: 'public',
    link: '/planets'
  },
  {
    title: 'Films',
    caption: 'Star wars - films',
    icon: 'videocam',
    link: '/films'
  },
  {
    title: 'Species',
    caption: 'Star wars - species',
    icon: 'adb',
    link: '/species'
  },
  {
    title: 'Vehicles',
    caption: 'Star wars - vehicles',
    icon: 'airport_shuttle',
    link: '/vehicles'
  },
  {
    title: 'Starships',
    caption: 'Star wars - starships',
    icon: 'star',
    link: '/starships'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

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
