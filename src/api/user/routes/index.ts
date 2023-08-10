import { Router } from "express"
import controllers from "../controllers";


const routes = Router();

routes.post('/', controllers.create);
routes.get('/', controllers.find);
routes.get('/:id', controllers.findOne);
routes.put('/', controllers.update);
routes.delete('/:id', controllers.delete);


export default routes
