import type { Note } from "@/interfaces";
import { defineStore } from "pinia";

export const useNoteStore = defineStore<"note", { notes: Note[] }>({
  id: "note",
  state: () => ({
    notes: [] as Note[],
  }),
  getters: {
    total: (state) => state.notes.length,
    completed: (state) =>
      state.notes.filter((note) => note.status === "Completed").length,
    notCompleted: (state) =>
      state.notes.filter((note) => note.status === "Not completed").length,
  },
  actions: {
    addNote(note: Note) {
      this.notes.push(note);
    },
  },
});
