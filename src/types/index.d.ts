export enum StatusCode {
  REDIRECT = 301,
  REDIRECT_BACK = 304,
  NOT_AUTH = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type Status = {
  statusCode: StatusCode;
  msg: string | undefined;
};
