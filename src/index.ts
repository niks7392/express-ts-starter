import express from "express";
import config from "./config";
import path from "path";
import services from "./services";
services

const app = express();
const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/clientv2/build`
    : `${process.cwd()}/clientv2/build`;

app.get('/api', (req, res) => {
  return res.send('api routes')
});

app.use(express.static(path.join(STATIC_PATH), { index: false }));
app.get('/*', function (req, res) {

  res.sendFile(path.join(STATIC_PATH, 'index.html'));
});




app.listen(config.PORT, () => console.log(`Application is running on ${config.HOST}`));