import { useNoteStore } from "./../notes";
import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

describe("Counter Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("adds notes", async () => {
    const store = useNoteStore();
    expect(store.notes.length).toBe(0);
    await store.addNote({
      title: "test",
      content: "test",
      id: 1,
      status: "New",
    });
    expect(store.notes.length).toBe(1);
  });

  it("returns totals", () => {
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
      {
        id: 7,
        title: "quis ut nam facilis et officia qui",
        content: "Lorem ipsum",
        status: "Not completed",
        toRemove: true,
      },
    ];
    expect(store.total).toBe(8);
    expect(store.completed).toBe(2);
    expect(store.notCompleted).toBe(4);
    expect(store.removable).toBe(1);
  });

  it("sorts notes", async () => {
    const store = useNoteStore();
    await store.addNote({
      title: "bbbb",
      content: "aaaaa",
      id: 2,
      status: "Completed",
    });
    await store.addNote({
      title: "aaaa",
      content: "bbbbb",
      id: 1,
      status: "New",
    });

    expect(store.notes[0].id).toBe(2);
    store.sortBy("title", "asc");
    expect(store.notes[0].id).toBe(1);
    store.sortBy("content", "asc");
    expect(store.notes[0].id).toBe(2);
    store.sortBy("content", "desc");
    expect(store.notes[0].id).toBe(1);
    store.sortBy("id", "desc");
    expect(store.notes[0].id).toBe(2);
    store.sortBy("id", "asc");
    expect(store.notes[0].id).toBe(1);
    store.sortBy("status", "asc");
    expect(store.notes[0].id).toBe(2);
  });

  it("removes notes", async () => {
    const store = useNoteStore();
    store.notes = [
      {
        id: 1,
        title: "delectus aut autem",
        content: "Lorem ipsum",
        status: "New",
        toRemove: true,
      },
      {
        id: 2,
        title: "delectus aut autem",
        content: "Lorem ipsum",
        status: "New",
        toRemove: true,
      },
      {
        id: 3,
        title: "quis ut nam facilis et officia qui",
        content: "Lorem ipsum",
        status: "Completed",
        toRemove: true,
      },
      {
        id: 4,
        title: "fugiat veniam minus",
        content: "Lorem ipsum",
        status: "Not completed",
      },
    ];
    await store.deleteRemovable();
    expect(store.notes.length).toBe(1);
    expect(store.notes[0].id).toBe(4);
  });

  it("unchecks all", async () => {
    const store = useNoteStore();
    store.notes = [
      {
        id: 1,
        title: "delectus aut autem",
        content: "Lorem ipsum",
        status: "New",
        toRemove: true,
      },
      {
        id: 2,
        title: "delectus aut autem",
        content: "Lorem ipsum",
        status: "New",
        toRemove: true,
      },
      {
        id: 3,
        title: "quis ut nam facilis et officia qui",
        content: "Lorem ipsum",
        status: "Completed",
        toRemove: true,
      },
      {
        id: 4,
        title: "fugiat veniam minus",
        content: "Lorem ipsum",
        status: "Not completed",
      },
    ];
    store.unCheckAll();
    await store.deleteRemovable();
    expect(store.notes.length).toBe(4);
    expect(store.removable).toBe(0);
  });
});
