"use strict"

const execa = require('execa')

const action = async () => {
  await execa("cp", ["-R", "src/api/api.yaml", "dist/api/api.yaml"])
}

action()
