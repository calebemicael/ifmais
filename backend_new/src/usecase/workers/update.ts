import Workers from "../../models/workers-model";
import { HttpRequest } from "../../protocols/HttpRequest-protocol";
import { HttpResponse } from "../../protocols/HttpResponse-protocol";

export class UpdateService{
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userId = httpRequest.body.id
      if (!userId) return {
        statusCode: 400,
        body: new Error('Missing param error: id')
      }
  
      await Workers.update(httpRequest.body, {
        where: {
          id: userId
        },
      },)
      
      const worker = await Workers.findByPk(userId, {
        plain: true
      })

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