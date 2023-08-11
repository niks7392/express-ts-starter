import express from "express";
import config from "./config";
import path from "path";
import services from "./services";
import apiRoutes from "./api";
import utils from "./utils";
// GLOBAL DECLARATIONS
declare global {
  var application: {
    services: typeof services,
    utils: typeof utils
  };
}
global.application = {
  services,
  utils
};


// (
//   async function () {
//     try{
      
//       let c =  application.services.get('prisma').client;
//       console.log(c);
//       await c.$connect()
//       console.log('hello');
      
//       console.log(await c.user.findMany())
//       await  c.$disconnect()
//     }catch(e){
//       console.log(e);
      
//     }
//   }
// )()




const app = express();
const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/dist/static`
    : `${process.cwd()}/dist/static`;

app.use('/api', apiRoutes);

app.use(express.static(path.join(STATIC_PATH), { index: false }));
app.get('/*', function (req, res) {
  res.sendFile(path.join(STATIC_PATH, 'index.html'));
});



app.listen(config.PORT, () => {
  console.log(`Application is running on ${config.HOST}`);
});