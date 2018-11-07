/**
 * API testing.
 *
 * Please ensure the application under test is running in another process
 * (npm run start:reload) before running this test.
 *
 * After running the test, inspect the logging from the application.
 */
import "mocha"
/* tslint:disable */
const chakram = require("chakram")
/* tslint:enable */
const request = chakram.request
const expect = chakram.expect

describe("API/Spec Parity Tests", () => {
  describe("tests new user registration", () => {
    it('should respond default for "successful operation"', () => {

      const registerSchema = {
        email: "test@test.com",
        firstName: "test",
        lastName: "test",
        password: "123456"
      }

      const response = request("post", "http://127.0.0.1:3000/api/v1/register",
        {
          body: registerSchema,
          headers: {"Content-Type": "application/json", "Accept": "application/json"},
          time: true
        }
      )

      return chakram.wait()
    })
  })
})
