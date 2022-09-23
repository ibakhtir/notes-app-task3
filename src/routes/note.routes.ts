import { Router, Response, Request } from "express";

import { Note } from "../types/note";
import { StatsItem } from "../types/stats";
import generateId from "../helpers/generateId";
import noteService from "../services/note.service";
import noteMiddleware from "../middleware/note.middleware";
import noteSchema from "../schema/note.schema";

const noteRouter = Router({ mergeParams: true });

// get stats

noteRouter.route("/stats").get((req: Request, res: Response) => {
  try {
    const stats: StatsItem[] = noteService.getNotesStats();

    res.status(200).send(stats);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// get all notes

noteRouter.route("/").get((req: Request, res: Response) => {
  try {
    const notes: Note[] = noteService.getNotes();

    res.status(200).send(notes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// get note by id

noteRouter.route("/:id").get((req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const existsNote: Note | undefined = noteService.getNoteById(id);

    res.status(200).send(existsNote);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// create new note

noteRouter
  .route("/")
  .post(noteMiddleware(noteSchema), (req: Request, res: Response) => {
    try {
      const newNote: Note = noteService.createNote({
        ...req.body,
        id: generateId(),
      });

      res.status(201).send(newNote);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

// update note (including archiving and unarchiving)

noteRouter
  .route("/:id")
  .patch(noteMiddleware(noteSchema), (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const updatedNote = noteService.updateNote(id, req.body);

      res.status(200).send(updatedNote);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

// delete note

noteRouter.route("/:id").delete((req: Request, res: Response) => {
  try {
    const { id } = req.params;

    noteService.deleteNote(id);

    res.status(200).send("Note deleted");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default noteRouter;
