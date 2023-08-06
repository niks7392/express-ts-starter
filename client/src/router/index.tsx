import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import Private from "./private";
import HomePage from "../pages/home-page";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element:<Private Element={HomePage}  isAllowed={true} props={{hello:true}} redirect="/"></Private>,
  },
]);


export default router