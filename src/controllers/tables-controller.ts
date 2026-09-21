import {Request, Response, NextFunction} from "express"
import { AppError } from "../utils/AppError"
import {z} from "zod"
import {knex} from "../database/knex"


class TableController{
    async index (request: Request, response: Response, next: NextFunction){
        try {
            const {id} = request.query
            const tables = await knex<TableRepository>("tables").select().orderBy("table_number")

            return response.json({tables})

        } catch (error) {
            next(error)
        }
    }
}

export {TableController}