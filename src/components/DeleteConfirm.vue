<script lang="ts" setup>
import { useNoteStore } from "@/stores/notes";

const store = useNoteStore();
</script>

<template>
  <div class="warning-container">
    <span
      >Do you want to delete the selected {{ store.removable }} note(s)?</span
    >
    <div class="warning-button-container">
      <button class="button button--cancel" @click="store.unCheckAll()">
        No
      </button>
      <button class="button button--confirm" @click="store.deleteRemovable()">
        Yes
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.warning-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: red;
  width: 600px;
  padding: 10px;
  border-radius: 6px;
}

.warning-button-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.button {
  padding: 10px;
  width: 100px;
  border: 1px solid white;
  margin-left: 10px;
  cursor: pointer;
  transition-duration: 0.2s;

  &--cancel {
    background-color: transparent;
    color: white;
  }

  &--confirm {
    background-color: white;
    color: red;
  }

  &:hover {
    box-shadow: 0 0 5px white;
  }
}
</style>
