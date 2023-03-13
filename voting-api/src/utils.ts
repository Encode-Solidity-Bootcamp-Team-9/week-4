import { HttpException } from "@nestjs/common";

export default class Utils {
    static parseErrorAndThrow(e: Error, httpCode : number = 400) : never  {
        const error = e as Error as any;
        const msg = error.code + " " + error.reason;
        console.error('Error while calling mint: ', error);
        throw new HttpException(msg, httpCode);
    }
}