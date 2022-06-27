export interface Note {
  id: string;
  title: string;
  content: string;
  status: "New" | "Completed" | "Not completed";
}
