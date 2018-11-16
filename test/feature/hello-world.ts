import { expect } from "chai"
import "mocha"
import request = require("supertest")

import IApplication from "../../src/api/application/i-application"
import container from "../../src/bin/ioc/compose-root"
import TYPES from "../../src/bin/ioc/types"

const application: IApplication = container().resolve(TYPES.IApplication)

describe("Hello World", () => {
  describe(`User can look at a "hello world" string upon request`, () => {
    it('should respond with a "hello world" JSON object', (done) => {

      request(application.getRequestListener())
        .get("/api/v1/hello-world")
        .set("Accept", "application/json")
        .expect(200)
        .expect("Content-type", /json/)
        .end((err, res) => {
          if (err) { return done(err) }
          expect(res.body.message).to.equal("hello world")
          done()
        })
    })
  })
})
