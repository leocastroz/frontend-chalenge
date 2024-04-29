<template>
  <q-page class="bg-image tw-flex tw-items-center tw-justify-center">
    <div class="tw-grid tw-text-center">
      <img src="../assets/images/logotype.png" alt="" width="170" class="tw-mx-auto">
      <div class="tw-grid tw-text-center tw-items-center tw-justify-center tw-w-56">
        <p class="tw-py-2 tw-text-xl tw-font-bold tw-text-black">Front-end challenge</p>
        <p class=" tw-text-black tw-text-[18px]">consuming "swapi" for data demonstration</p>
      </div>
      <RouterLink to="/people" class="tw-py-2 tw-my-3 tw-rounded-full tw-bg-orange-800 tw-text-[18px]">see now</RouterLink>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
