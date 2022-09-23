import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

function noteMiddleware(schema: AnySchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // req body length validation
      // in POST method we do not expect the id property, it is set on the server
      // in PATCH method id may or may not come, depending on how the logic is described on the client

      if (req.body.id) {
        if (Object.keys(req.body).length > 7) {
          return res.status(400).json({
            error: {
              message: "More properties than expected",
              code: 400,
            },
          });
        }
      } else {
        if (Object.keys(req.body).length > 6) {
          return res.status(400).json({
            error: {
              message: "More properties than expected",
              code: 400,
            },
          });
        }
      }

      // yup validation

      await schema.validate(req.body);
      next();
    } catch (error) {
      res.status(400).json({
        error: {
          message: "INVALID_DATA",
          code: 400,
        },
      });
    }
  };
}

export default noteMiddleware;
