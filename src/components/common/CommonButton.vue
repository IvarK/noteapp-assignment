<script lang="ts" setup>
import { toRefs, withDefaults } from "vue";

interface Props {
  appearance?: "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), { appearance: "primary" });

const { appearance } = toRefs(props);
</script>

<template>
  <button class="button" :class="{ ['button--' + appearance]: true }">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  width: 200px;
  height: 35px;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition-duration: 0.2s;

  &--primary {
    background: #00689d;
    color: white;

    &:hover {
      box-shadow: 0 0 5px #00689d;
    }
  }

  &--secondary {
    background: white;
    color: #00689d;

    &:hover {
      text-shadow: 0 0 5px #00689d;
    }
  }
}
</style>
