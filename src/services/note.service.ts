import notes from "../mock/notes.json";
import { Note } from "../types/note";
import { Stats } from "../types/stats";

class NoteService {
  notes: Note[];

  constructor(notes: Note[]) {
    this.notes = notes;
  }

  getNotes() {
    return this.notes;
  }

  getNoteById(id: string) {
    const existsNote = this.notes.find((n) => n.id === id);

    return existsNote;
  }

  createNote(newNote: Note) {
    this.notes.push(newNote);

    return newNote;
  }

  updateNote(id: string, note: Note) {
    const existsNote = this.notes.find((n) => n.id === id);

    if (existsNote) {
      existsNote.title = note.title;
      existsNote.body = note.body;
      existsNote.category = note.category;
      existsNote.dates = note.dates;
      existsNote.isArchived = note.isArchived;
    }

    return existsNote;
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  getNotesStats() {
    const stats: Stats = {};

    this.notes.forEach((note) => {
      if (!stats[note.category]) {
        stats[note.category] = {
          active: note.isArchived === false ? 1 : 0,
          archive: note.isArchived === false ? 0 : 1,
        };
      } else {
        stats[note.category].active += note.isArchived === false ? 1 : 0;
        stats[note.category].archive += note.isArchived === false ? 0 : 1;
      }
    });

    return Object.keys(stats).map((category) => {
      return {
        id: category,
        active: stats[category].active,
        archive: stats[category].archive,
      };
    });
  }
}

export default new NoteService(notes);
