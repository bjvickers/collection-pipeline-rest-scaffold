import express from "express"

export default interface IController {
  createRouter(): express.Router
}
