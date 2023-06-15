import express, { Express, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import "dotenv/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);
const app: Express = express();
const port = 3000;

app.use(express.json());
type review_body = {
  job: string;
  reviwers: string[];
};

app.get("/health_check", (_req: Request, res: Response) => {
  res.send("Healthy");
});

app.post("/review", (req: Request, res: Response) => {
  const body: review_body = req.body;
  const job = body.job;
  const reviwers = body.reviwers;
  const job_id = job + "@" + uuidv4();
  // send email to everyone on the list of reviewers
  reviwers.forEach(function (email) {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "testing app",
      html: "<p>it has worked</p>",
    });
  });
  // in response send back unique id
  res.send({ job_id: job_id });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
