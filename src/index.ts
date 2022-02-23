import { App } from "./app"
import * as dotenv from 'dotenv';

dotenv.config()

const port = process.env.SERVICE_PORT

new App().server.listen(port);

console.log(`SERVICE STATUS: ${process.env.SERVICE_STATUS = 'ONLINE'}`)
console.log(`SERVICE ON: ${process.env.SERVICE_NAME}`)
console.log(`SERVICE ROUTE IN PORT: ${process.env.SERVICE_PORT}`)