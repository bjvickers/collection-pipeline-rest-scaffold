"use strict"

const execa = require('execa')

const action = async () => {
  await execa("mkdir", ["-vp", "dist/api/spec"])
  await execa("cp", ["-R", "src/api/spec/api.yaml", "dist/api/spec/api.yaml"])
}

action()
