"use strict"

// Populate process.env with the variables in .env
import dotenv from "dotenv"
dotenv.config()

import iocboot from "../ioc/compose-root"
import Server from "../api/server"
import TYPES from "../ioc/types"

const server: Server = iocboot().resolve(TYPES.Server)
server.listen(parseInt(process.env.PORT || "3000", 10))
