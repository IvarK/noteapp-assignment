<script lang="ts" setup>
import TableLite from "vue3-table-lite/ts";
import { computed } from "vue";
import { useNoteStore } from "@/stores/notes";
import type { Note } from "@/interfaces";
import CommonButton from "./common/CommonButton.vue";

const store = useNoteStore();

const notes = computed(() => store.notes);

const columns = computed(() => [
  {
    field: "id",
    label: "ID",
    sortable: true,
    // The Table component package has some weirdness with width, setting this to 1% fixes that
    width: "1%",
  },
  {
    field: "title",
    label: "Title",
    sortable: true,
    width: "30%",
  },
  {
    field: "content",
    label: "Content",
    sortable: true,
    width: "30%",
  },
  {
    field: "status",
    label: "Status",
    sortable: true,
    width: "20%",
  },
]);

const sortNotes = (
  _offset: number,
  _limit: number,
  order: string,
  sort: "asc" | "desc"
) => {
  store.sortBy(order as keyof Note, sort);
};
</script>

<template>
  <div>
    <TableLite
      :columns="columns"
      :rows="notes"
      :total="store.total"
      :is-hide-paging="true"
      @do-search="sortNotes"
    />
    <div class="button-container">
      <CommonButton @click="store.openNoteModal()">Add</CommonButton>
    </div>
  </div>
</template>

<style lang="scss">
.vtl-table {
  margin-bottom: 0 !important;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
