<template>
  <q-dialog v-model="localDialogVisible">
    <q-card class="bg-card tw-border tw-border-1 tw-border-orange-300">
      <div class="tw-bg-[#aa9c2478] ">
        <q-card-section class="tw-w-96 tw-grid tw-gap-2 tw-font-bold tw-text-orange-200">
          <img src="../assets/images/people-icon.png" alt="people-random" width="200" class="tw-fixed tw-26 tw-mt-[-120px] tw-ml-[200px]">
          <h2 class="tw-text-white tw-font-bold tw-tracking-wide">{{ person.name }}</h2>
          <p>Birth Year:  <span class="tw-text-black">{{ person.birth_year }}</span></p>
          <p>Eye Color: <span class="tw-text-black">{{ person.eye_color }}</span></p>
          <p>Gender: <span class="tw-text-black">{{ person.gender }}</span></p>
          <p>Height: <span class="tw-text-black">{{ person.height }}</span></p>
          <p>Hair: <span class="tw-text-black">{{person.hair_color}}</span></p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="fechar" color="danger" @click="closeDialog" />
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
