"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello is this working");
});
app.post("/jobsummer", (req, res) => {
    //get name and list of reviewers from req
    // create unique id doing name+timestamp or something
    // send email to everyone on the list of reviewers
    // in response send back unique id
});
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
//# sourceMappingURL=index.js.map