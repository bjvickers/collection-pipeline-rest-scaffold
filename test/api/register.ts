"use strict"

/**
 * API testing.
 * 
 * Please ensure the application under test is running in another process 
 * (npm run start:reload) before running this test.
 * 
 * After running the test, inspect the logging from the application.
 */
const mocha = require('mocha')
const chakram = require('chakram')

const request = chakram.request
const expect = chakram.expect

describe('API/Spec Parity Tests', function() {
  describe('tests new user registration', function() {
    it('should respond default for "successful operation"', function() {
      
      const registerSchema = { 
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "123456"
      }
          
      var response = request('post', 'http://127.0.0.1:3000/api/v1/register',
        {
          'body': registerSchema,
          'headers': {"Content-Type":"application/json","Accept":"application/json"},
          'time': true
        }
      )

      return chakram.wait()
    })
  })
})
