class HttpError extends Error {
  readonly code: number;
  readonly alias: string;

  constructor(code: number, alias: string, message: string) {
    super();
    this.code = code;
    this.alias = alias;
    this.message = message;
  }
}

// 400's
class BadRequestError extends HttpError {
  constructor(message?: string) {
    super(400, 'Bad Request', message);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message?: string) {
    super(401, 'Unauthorized', message);
  }
}

class ForbiddenError extends HttpError {
  constructor(message?: string) {
    super(403, 'Forbidden', message);
  }
}

class NotFoundError extends HttpError {
  constructor(message?: string) {
    super(404, 'Not Found', message);
  }
}

class MethodNotAllowedError extends HttpError {
  constructor(message?: string) {
    super(405, 'Method Not Allowed', message);
  }
}

class ConflictError extends HttpError {
  constructor(message?: string) {
    super(409, 'Conflict', message);
  }
}

class UnsupportedMediaTypeError extends HttpError {
  constructor(message?: string) {
    super(415, 'Unsupported Media Type', message);
  }
}

class TooManyRequestsError extends HttpError {
  constructor(message?: string) {
    super(429, 'Too Many Requests', message);
  }
}

// 500's
class InternalServerError extends HttpError {
  constructor(message?: string) {
    super(500, 'Internal Server Error', message);
  }
}

class NotImplementedError extends HttpError {
  constructor(message?: string) {
    super(501, 'Not Implemented', message);
  }
}

class BadGatewayError extends HttpError {
  constructor(message?: string) {
    super(502, 'Bad Gateway', message);
  }
}

class ServiceUnavailableError extends HttpError {
  constructor(message?: string) {
    super(503, 'Service Unavailable', message);
  }
}

class GatewayTimeoutError extends HttpError {
  constructor(message?: string) {
    super(504, 'Gateway Timeout', message);
  }
}

export {
  HttpError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  ConflictError,
  UnsupportedMediaTypeError,
  TooManyRequestsError,
  InternalServerError,
  NotImplementedError,
  BadGatewayError,
  ServiceUnavailableError,
  GatewayTimeoutError,
};
