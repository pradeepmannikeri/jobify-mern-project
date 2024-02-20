import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);

  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  const msg = err.message || "something went wrong";

  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
