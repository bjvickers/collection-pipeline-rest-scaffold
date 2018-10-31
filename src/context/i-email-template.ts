"use strict"

import express from "express"

export default interface IEmailTemplate {
  path: string
  format: string
  outputDir: string
}
