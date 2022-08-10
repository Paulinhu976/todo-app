import { StatusCodes } from "http-status-codes";
const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;
export function httpErrorHandler() {}

export function internalServerError(res) {
  return res.status(INTERNAL_SERVER_ERROR).send();
}

export function badRequest(res) {
  return res.status(BAD_REQUEST).send();
}
