import Workers from "../../models/workers-model";
import { HttpRequest } from "../../protocols/HttpRequest-protocol";
import { HttpResponse } from "../../protocols/HttpResponse-protocol";
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'

export class SingInService{
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
    if (!httpRequest.body.email || !httpRequest.body.password) return {
      statusCode: 400,
      body: new Error('Missing param error: Name, password')
    }

    const { email, password } = httpRequest.body
    const user = await Workers.findOne({ where: { email } })

    if (!user) return {
      statusCode: 401,
      body: { message: 'User not found' }
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if (!isCorrectPassword) return {
      statusCode: 401,
      body: { message: 'Incorrect password' }
    }

    const userId = user.id
    const token = jwt.sign({ id: userId }, process.env.APP_SECRET)

    return {
      statusCode: 200,
      body: {
        user,
        token
      }
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err
    }
  }
  } 
}