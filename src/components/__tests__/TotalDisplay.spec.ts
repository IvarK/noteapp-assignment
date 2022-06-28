import { useNoteStore } from "./../../stores/notes";
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TotalDisplay from "@/components/TotalDisplay.vue";
import { createTestingPinia } from "@pinia/testing";

const wrapper = mount(TotalDisplay, {
  global: {
    plugins: [createTestingPinia()],
  },
});

describe("TotalDisplay", async () => {
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
      title: "delectus aut autem",
      content: "Lorem ipsum",
      status: "New",
    },
    {
      id: 3,
      title: "quis ut nam facilis et officia qui",
      content: "Lorem ipsum",
      status: "Completed",
    },
    {
      id: 4,
      title: "fugiat veniam minus",
      content: "Lorem ipsum",
      status: "Not completed",
    },
    {
      id: 5,
      title: "fugiat veniam minus",
      content: "Lorem ipsum",
      status: "Not completed",
    },
    {
      id: 6,
      title: "fugiat veniam minus",
      content: "Lorem ipsum",
      status: "Not completed",
    },
    {
      id: 7,
      title: "quis ut nam facilis et officia qui",
      content: "Lorem ipsum",
      status: "Completed",
    },
  ];

  it("shows totals properly", () => {
    expect(wrapper.find(".totals-container").text()).toContain("7"); // totals
    expect(wrapper.find(".totals-container").text()).toContain("2"); // completed
    expect(wrapper.find(".totals-container").text()).toContain("3"); // not completed
  });
});
