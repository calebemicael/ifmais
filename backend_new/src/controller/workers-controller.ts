import { HttpResponse } from "../protocols/HttpResponse-protocol";
import {Request, Response} from 'express'
import { SingUpService } from "../usecase/workers/create";
import { SingInService } from "../usecase/workers/login";
import { UpdateService } from "../usecase/workers/update";



export default class UserController {
  async create (req: Request, res: Response): Promise<void> {
    const {name, cpf, enterprisingId, password, whatsapp, email} = req.body

    const signUpService = new SingUpService()

    const httpRequest = {
      body: {
        name,
        cpf,
        enterprisingId,
        password,
        whatsapp,
        email
      }
    }
    const response = await signUpService.handle(httpRequest)


    res.status(response.statusCode).json(response.body)
  }

  async login (req: Request, res: Response): Promise<void> {
    const {password, email} = req.body

    const singInService = new SingInService()

    const httpRequest = {
      body: {
        password,
        email
      }
    }
    const response = await singInService.handle(httpRequest)


    res.status(response.statusCode).json(response.body)
  }

  async update (req: Request, res: Response): Promise<void> {
    const {id, name, cpf, enterprisingId, whatsapp, email} = req.body

    const updateService = new UpdateService()

    const httpRequest = {
      body: {
        id,
        name,
        cpf,
        enterprisingId,
        whatsapp,
        email
      }
    }
    const response = await updateService.handle(httpRequest)


    res.status(response.statusCode).json(response.body)
  }


}