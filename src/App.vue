<script setup lang="ts">
import NoteTable from "./components/NoteTable.vue";
import { useNoteStore } from "@/stores/notes";
import { onMounted } from "vue";
import TotalDisplay from "./components/TotalDisplay.vue";
import NoteModal from "./components/NoteModal.vue";
import LoadingOverlay from "./components/LoadingOverlay.vue";

const store = useNoteStore();

onMounted(() => {
  store.initialize();
});
</script>

<template>
  <div class="app-wrapper">
    <TotalDisplay />
    <NoteTable />
    <NoteModal />
    <LoadingOverlay v-if="store.loading" />
  </div>
</template>

<style>
@import "./assets/base.css";

.app-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
