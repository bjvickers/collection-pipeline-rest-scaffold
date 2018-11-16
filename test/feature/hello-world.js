"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const request = require("supertest");
const compose_root_1 = __importDefault(require("../../src/bin/ioc/compose-root"));
const types_1 = __importDefault(require("../../src/bin/ioc/types"));
const application = compose_root_1.default().resolve(types_1.default.IApplication);
describe("Hello World", () => {
    describe(`User can look at a "hello world" string upon request`, () => {
        it('should respond with a "hello world" JSON object', (done) => {
            request(application.getRequestListener())
                .get("/api/v1/hello-world")
                .set("Accept", "application/json")
                .expect(200)
                .expect("Content-type", /json/)
                .end((err, res) => {
                if (err) {
                    return done(err);
                }
                chai_1.expect(res.body.message).to.equal("hello world");
                done();
            });
        });
    });
});
//# sourceMappingURL=hello-world.js.map