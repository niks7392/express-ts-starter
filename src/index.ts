import express from "express";
import config from "./config";
import path from "path";
import services from "./services";
// GLOBAL DECLARATIONS
declare global {
  var application: {
    service: any
  };
}
global.application = {
  service: {

  }
}




const app = express();
const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/client/out`
    : `${process.cwd()}/client/out`;

app.get('/api', (req, res) => {
  res.send('api routes').end();
});

app.use(express.static(path.join(STATIC_PATH), { index: false }));
app.get('/*', function (req, res) {

  res.sendFile(path.join(STATIC_PATH, 'index.html'));
});



app.listen(config.PORT, () => console.log(`Application is running on ${config.HOST}`));