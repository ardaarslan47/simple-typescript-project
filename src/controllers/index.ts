import { Request, Response, NextFunction } from "express";

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send("hello world");
  } catch (error) {
    res.status(500);
    console.log(error);
    throw new Error("Internal Server Error");
  }
};
