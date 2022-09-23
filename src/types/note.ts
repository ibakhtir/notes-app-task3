export interface NoteSchema {
  title: string;
  body: string;
  category: string;
  createdAt: number;
  dates: string[];
  isArchived: boolean;
}

export interface Note extends NoteSchema {
  id: string;
}
