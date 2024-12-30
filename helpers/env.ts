import * as dotenv from "dotenv";

dotenv.config();

export default class Env {
    public static readonly BASE_URL = process.env.BASE_URL;
    public static readonly EMAIL = process.env.EMAIL;
    public static readonly PASSWORD = process.env.PASSWORD;
}