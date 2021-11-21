import express from 'express'

import WorkersController from './controller/workers-controller'

const router = express.Router()

const workersController = new WorkersController() 

router.get('/', (req, res) => {
  res.send('hello')
})

// workers routes
router.post('/workers/signup', workersController.create)
router.put('/workers/update', workersController.update)
router.post('/workers/signin', workersController.login)


export default router