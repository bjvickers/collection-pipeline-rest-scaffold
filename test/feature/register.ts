"use strict"

import "mocha"
import { expect } from "chai"
import request = require('supertest')

import container from "../../src/bin/ioc/compose-root"
import TYPES from "../../src/bin/ioc/types"
import Application from "../../src/api/application/application"

const application: Application = container().resolve(TYPES.Application)

describe('User Registration', function() {
  describe('New user can register when providing valid values for all required fields', function() {
    it('should respond default for "successful operation"', function(done) {
      
      const registerSchema = { 
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "123456"
      }
      
      request(application.getRequestListener())
        .post("/api/v1/register")
        .send(registerSchema)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err)
          done()
        })
    })
  })
})
