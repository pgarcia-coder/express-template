import { Request } from "express";

export const health = (req: Request): string => 'Server is running';