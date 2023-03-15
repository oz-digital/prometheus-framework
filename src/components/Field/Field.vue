<template>
  <!-- Wrapper -->
  <div class="flex-nowrap flex-v-center flex pd-medium bg-white">
    <!-- Label -->
    <div v-if="label" class="t-left mn-r-small w-33">
      <label>{{label}}</label>
    </div>
    <!-- Input -->
    <div class="w-100">
      <input
        @input="event => text = emit('update:modelValue', (event.target as HTMLInputElement)?.value)"
        type="text"
        class="w-100"
        :value="field"
        :placeholder="placeholder"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

export interface Props {
  label?: string,
  placeholder?: string,
  field?: any,
  validation?: boolean,
}

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<Props>(), {
  label: 'Label',
  placeholder: 'Enter something here',
  field: null,
  validation: false,
});

const text = ref(props.field);
</script>

<style lang="scss">
</style>