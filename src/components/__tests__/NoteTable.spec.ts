import { useNoteStore } from "./../../stores/notes";
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NoteTable from "@/components/NoteTable.vue";
import { createTestingPinia } from "@pinia/testing";

const wrapper = mount(NoteTable, {
  global: {
    plugins: [createTestingPinia()],
  },
});

describe("NoteTable", async () => {
  const store = useNoteStore();
  store.notes = [
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

  it("renders properly", () => {
    expect(wrapper.text()).toContain("Title");
    expect(wrapper.findAll(".vtl-tbody-tr")).toHaveLength(3);
  });
});
