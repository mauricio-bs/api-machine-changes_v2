import { httpServer } from './app'

httpServer.listen(process.env.PORT, () => {
  console.log('Server running')
  console.log('Environment: ', process.env.NODE_ENV)
})
