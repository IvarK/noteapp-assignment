import type { Note } from "@/interfaces";

// Returning a value after a delay with promise, to simulate database calls
const returnWithDelay = <T>(returned: T, delay: number): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(returned);
    }, delay);
  });
};

export default {
  getNotes: (): Promise<Note[]> =>
    returnWithDelay(
      [
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
      ],
      2000
    ),
  postNote: (_note: Note) => returnWithDelay(true, 1000),
  deleteNotes: (_notes: Note[]) => returnWithDelay(true, 1000),
};
