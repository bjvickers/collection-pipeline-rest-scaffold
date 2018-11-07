import express from "express"

export default interface IApplication {
  getRequestListener(): express.Application
}
