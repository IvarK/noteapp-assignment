import type { Note } from "@/interfaces";
import { defineStore } from "pinia";

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: [] as Note[],
    loading: true,
    modalOpen: false,
    lastID: 0, // Used to autogenerate more IDs
  }),
  getters: {
    total: (state) => state.notes.length,
    completed: (state) =>
      state.notes.filter((note) => note.status === "Completed").length,
    notCompleted: (state) =>
      state.notes.filter((note) => note.status === "Not completed").length,
    removable: (state) => state.notes.filter((note) => note.toRemove).length,
  },
  actions: {
    addNote(note: Note) {
      this.notes.push(note);
      this.lastID = note.id;
    },
    sortBy(key: keyof Note, direction: "asc" | "desc") {
      this.notes.sort((a, b) => {
        // This works for both numbers and strings
        const aValue = a[key] ?? 0;
        const bValue = b[key] ?? 0;
        if (direction === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    },
    openNoteModal() {
      this.modalOpen = true;
    },
    closeNoteModal() {
      this.modalOpen = false;
    },
    deleteRemovable() {
      this.notes = this.notes.filter((note) => !note.toRemove);
    },
    unCheckAll() {
      this.notes.forEach((note) => (note.toRemove = false));
    },
    initialize() {
      // Mocking an api call with Promise
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          this.notes = [
            {
              id: 1,
              title: "delectus aut autem",
              content: "Lorem ipsum",
              status: "New",
            },
            {
              id: 2,
              title: "quis ut nam facilis et officia qui",
              content: "Lorem ipsum",
              status: "Completed",
            },
            {
              id: 3,
              title: "fugiat veniam minus",
              content: "Lorem ipsum",
              status: "Not completed",
            },
          ];
          this.loading = false;
          this.lastID = 3;
          resolve();
        }, 2000);
      });
    },
  },
});
