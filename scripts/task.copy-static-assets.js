"use strict"

const execa = require('execa')

const action = async () => {
  await execa("cp", ["-R", "src/api/spec/api.yaml", "dist/api/spec/api.yaml"])
}

action()
