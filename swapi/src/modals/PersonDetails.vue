<template>
  <q-dialog v-model="localDialogVisible">
    <q-card class="bg-card tw-border tw-border-1 tw-border-orange-300">
      <div class="tw-bg-[#aa9c2478]">
        <img src="../assets/images/logotype.png" alt="" width="70" class="tw-mx-auto tw-pt-3">
        <q-card-section class="tw-w-96 tw-grid tw-gap-2 tw-text-white tw-font-light">
          <img src="../assets/images/people-icon.png" alt="people-random" width="200" class="tw-fixed tw-26 tw-mt-[-120px] tw-ml-[200px]">
          <div class="tw-flex tw-items-center tw-text-orange-300 tw-tracking-wide tw-bg-[#0000002e] tw-px-4 tw-rounded tw-w-auto tw-font-light">
            <q-icon name="person" size="2em" />
            <h2 class="tw-px-1 tw-mt-1">{{ person.name }}</h2>
          </div>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Birth Year:  <span class="tw-text-black">{{ person.birth_year }}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Eye Color: <span class="tw-text-black">{{ person.eye_color }}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Gender: <span class="tw-text-black">{{ person.gender }}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Height: <span class="tw-text-black">{{ person.height }}</span></p>
          <p class="tw-bg-[#0000002e] tw-py-2 tw-rounded tw-px-5">Hair: <span class="tw-text-black">{{person.hair_color}}</span></p>
        </q-card-section>
        <q-card-actions class="tw-cursor-pointer tw-text-black tw-font-black tw-flex tw-justify-between tw-px-5">
          <p class="tw-font-thin tw-text-xs">developer by Leonardo Castro</p>
          <q-icon name="close" size="2em" @click="closeDialog" />
        </q-card-actions>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    },
    dialogVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      localDialogVisible: this.dialogVisible
    }
  },
  watch: {
    dialogVisible(newVal) {
      this.localDialogVisible = newVal;
    },
    localDialogVisible(newVal) {
      if (newVal !== this.dialogVisible) {
        this.$emit('update:dialogVisible', newVal);
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close');
    }
  }
};
</script>
