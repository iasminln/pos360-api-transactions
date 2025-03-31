import { app } from './app'

const port = process.env.PORT || 3333
const host = ('RENDER' in process.env) ? '0.0.0.0' : 'localhost'

app.listen({
  port: Number(port),
  host
}).then(() => {
  console.log(`HTTP Server Running on http://${host}:${port}`)
})
