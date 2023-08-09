import express from "express";
import config from "./config";
import path from "path";
import { execSync } from "child_process";
const app = express();
const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/client/dist`
    : `${process.cwd()}/client/`;

app.get('/api', (req, res) => {
  return res.send('api routes')
});

app.use(express.static(path.join(STATIC_PATH), { index: false }));
app.get('/*', function (req, res) {

  res.sendFile(path.join(STATIC_PATH, 'index.html'));
});

console.log(Buffer.from(execSync('ls client')).toString())
console.log(STATIC_PATH);
console.log(process.env.NODE_ENV);


app.listen(config.PORT, () => console.log(`Application is running on ${config.HOST}`));