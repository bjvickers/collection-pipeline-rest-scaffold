import { expect } from "chai"
import "mocha"
import request = require("supertest")

import IApplication from "../../src/api/application/i-application"
import container from "../../src/bin/ioc/compose-root"
import TYPES from "../../src/bin/ioc/types"

const application: IApplication = container().resolve(TYPES.IApplication)

describe("User Registration", () => {
  describe("New user can register when providing valid values for all required fields", () => {
    it('should respond default for "successful operation"', (done) => {

      const registerSchema = {
        email: "test@test.com",
        firstName: "test",
        lastName: "test",
        password: "123456"
      }

      request(application.getRequestListener())
        .post("/api/v1/register")
        .send(registerSchema)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .expect(200)
        .end((err, res) => {
          if (err) { return done(err) }
          done()
        })
    })
  })
})
