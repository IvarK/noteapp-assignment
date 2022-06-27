import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NoteModal from "@/components/NoteModal.vue";
import { createTestingPinia } from "@pinia/testing";

describe("NoteModal", () => {
  it("renders properly", () => {
    const wrapper = mount(NoteModal, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(wrapper.text()).toContain("Add note");
  });
});
