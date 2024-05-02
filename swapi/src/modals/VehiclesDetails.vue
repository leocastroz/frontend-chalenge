<template>
  <q-dialog v-model="localDialogVisible">
    <q-card class="bg-card tw-border tw-border-1 tw-border-orange-300">
      <div class="tw-bg-[#aa9c2478]">
        <img src="../assets/images/logotype.png" alt="" width="70" class="tw-mx-auto tw-pt-3">
        <q-card-section class="tw-w-96 tw-grid tw-gap-2 tw-text-white tw-font-light">
          <transition appear enter-active-class="animated fadeInDown slower delay-1s">
            <img src="../assets/images/vehicle-icon.png" alt="people-random" width="120" class="tw-fixed tw-26 tw-mt-[-105px] tw-ml-[235px]">
          </transition>
          <div class="tw-flex tw-items-center tw-text-orange-300 tw-tracking-wide tw-bg-[#0000002e] tw-px-4 tw-rounded tw-w-auto tw-font-light">
            <q-icon name="adb" size="2em" />
            <h2 class="tw-px-1 tw-mt-1">{{vehicles.name}}</h2>
          </div>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Model:  <span class="tw-text-black">{{vehicles.model}}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Manufacturer: <span class="tw-text-black">{{vehicles.manufacturer}}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Length: <span class="tw-text-black">{{vehicles.length}}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Passengers: <span class="tw-text-black">{{vehicles.passengers}}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Cargo Capacity: <span class="tw-text-black">{{vehicles.cargo_capacity}}</span></p>
        </q-card-section>
        <q-card-actions class="tw-cursor-pointer tw-text-black tw-font-black tw-flex tw-justify-between tw-px-5">
          <p class="tw-font-thin tw-text-xs">developer by Leonardo Castro</p>
          <q-icon name="close" size="2em" @click="closeDialog" />
        </q-card-actions>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  vehicles: {
    type: Object,
    required: true
  },
  dialogVisible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:dialogVisible', 'close']);

let localDialogVisible = ref(props.dialogVisible);

watch(() => props.dialogVisible, newVal => {
  localDialogVisible.value = newVal;
});

watch(localDialogVisible, newVal => {
  if (newVal !== props.dialogVisible) {
    emit('update:dialogVisible', newVal);
  }
});

function closeDialog() {
  emit('close');
};
</script>
