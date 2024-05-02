<template>
  <q-item :class="{ 'active-link-class': isActive }">
    <router-link :to="link" class="tw-bg-red-30 tw-w-full tw-flex tw-py-2">
      <q-item-section v-if="props.icon" avatar>
        <q-icon :name="props.icon" class="tw-text-orange-300" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="tw-text-orange-400">{{ props.title }}</q-item-label>
        <q-item-label caption>{{ props.caption }}</q-item-label>
      </q-item-section>
    </router-link>
  </q-item>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '#'
  },
  icon: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.link)
</script>
