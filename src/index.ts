import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello is this working");
});

app.post("/jobsummer", (req: Request, res: Response) => {
  //get name and list of reviewers from req
  // create unique id doing name+timestamp or something
  // send email to everyone on the list of reviewers
  // in response send back unique id
});

app.use(express.json());
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
