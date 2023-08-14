<template>
  <hr>
  <button v-if="props.open" @click="() => props.setOpen(false)">Close</button>
  <br>
  <slot v-if="props.open" />
  <hr>
</template>

<script setup lang="ts">

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const props = defineProps<ModalProps>();
</script>
