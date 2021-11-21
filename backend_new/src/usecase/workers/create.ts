import Workers from "../../models/workers-model";
import { HttpRequest } from "../../protocols/HttpRequest-protocol";
import { HttpResponse } from "../../protocols/HttpResponse-protocol";
import bcrypt from 'bcrypt'

export class SingUpService{
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
    if (!httpRequest.body.name || !httpRequest.body.cpf || !httpRequest.body.email || !httpRequest.body.password) return {
      statusCode: 400,
      body: new Error('Missing param error: Name, cpf, email, password')
    }
    
    const salt = bcrypt.genSaltSync(10)
    httpRequest.body.password = bcrypt.hashSync(httpRequest.body.password, salt)

    const worker = await Workers.create(httpRequest.body)

    delete worker.password

    return {
      statusCode: 200,
      body: worker
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err
    }
  }
  } 
}