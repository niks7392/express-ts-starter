import { Request, Response } from "express"

export default {
    async create(req: Request, res: Response) {
        try {
            return res.send(req.baseUrl)
        } catch (e) {
            // return application.utils.get('errors').ApplicationError()
        }
    },
    async find(req: Request, res: Response) {
        try {
            return res.send(req.baseUrl)
        } catch (e) {
            // return handleError(e, res)
        }
    },
    async findOne(req: Request, res: Response) {
        try {
            return res.send(req.baseUrl)
        } catch (e) {
            // return handleError(e, res)
        }
    },
    async update(req: Request, res: Response) {
        try {
            return res.send(req.baseUrl)
        } catch (e) {
            // return handleError(e, res)
        }
    },
    async delete(req: Request, res: Response) {
        try {
            return res.send(req.baseUrl)
        } catch (e) {
            // return handleError(e, res)
        }
    },
}