import { Router } from "express";

import noteRouter from "./note.routes";

const router: Router = Router({ mergeParams: true });

router.use("/notes", noteRouter);

export default router;
