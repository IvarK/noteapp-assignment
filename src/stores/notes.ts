import type { Note } from "@/interfaces";
import mockDatabase from "@/utils/mockDatabase";
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
    async addNote(note: Note) {
      this.loading = true;
      const success = await mockDatabase.postNote(note);
      if (success) {
        this.notes.push(note);
        this.lastID = note.id;
      }
      this.loading = false;
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
    async deleteRemovable() {
      this.loading = true;
      const success = await mockDatabase.deleteNotes(
        this.notes.filter((note) => note.toRemove)
      );
      if (success) this.notes = this.notes.filter((note) => !note.toRemove);
      this.loading = false;
    },
    unCheckAll() {
      this.notes.forEach((note) => (note.toRemove = false));
    },
    async initialize() {
      const notes = await mockDatabase.getNotes();
      this.notes = notes;
      this.lastID = 3;
      this.loading = false;
    },
  },
});
