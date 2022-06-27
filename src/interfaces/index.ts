export interface Note {
  id: number;
  title: string;
  content: string;
  status: "New" | "Completed" | "Not completed";
}
