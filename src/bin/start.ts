// Populate process.env with the variables in .env
import dotenv from "dotenv"
dotenv.config()

import IServer from "../api/server/i-server"
import container from "./ioc/compose-root"
import TYPES from "./ioc/types"

const server: IServer = container().resolve(TYPES.IServer)
server.listen(parseInt(process.env.PORT || "3000", 10))
