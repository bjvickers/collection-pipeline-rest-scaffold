"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const request = require("supertest");
const compose_root_1 = __importDefault(require("../../src/bin/ioc/compose-root"));
const types_1 = __importDefault(require("../../src/bin/ioc/types"));
const application = compose_root_1.default().resolve(types_1.default.IApplication);
describe("User Registration", () => {
    describe("New user can register when providing valid values for all required fields", () => {
        it('should respond default for "successful operation"', (done) => {
            const registerSchema = {
                email: "test@test.com",
                firstName: "test",
                lastName: "test",
                password: "123456"
            };
            request(application.getRequestListener())
                .post("/api/v1/register")
                .send(registerSchema)
                .set("Content-Type", "application/json")
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                if (err) {
                    return done(err);
                }
                done();
            });
        });
    });
});
//# sourceMappingURL=register.js.map