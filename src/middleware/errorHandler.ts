import { Request, Response, NextFunction } from "express";
import type { Status, StatusCode } from "../types";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _statusCode: StatusCode = res.statusCode ? res.statusCode : 500;

  // enum statuscode created for switch case for now it doesnt nessecery
  error(req, res, err.message, _statusCode);
};

const error = (req: Request, res: Response, message: string, s: StatusCode) => {
  let status: Status;
  status = { statusCode: s, msg: message };
  console.log(status.statusCode, " - ", status.msg);
};
