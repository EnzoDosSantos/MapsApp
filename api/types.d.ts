
import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
import type { ObjectId } from "mongoose";
export interface IUser {
    username: string
    email: string
    password: string
}

export interface IPin {
    username: string
    title: string
    description: string
    rating: number
    lat: number
    long: number
}
export interface IRequest extends Request {
  user?: string | JwtPayload;
}


export interface IUserResponse {
    user: {
      username: string
      email: string
    }
    token: string
}
