"use strict"

import express from "express"

// @TODO: Extract express further out
export default interface IApi {
  incoming: express.Request
  outgoing: express.Response
}
