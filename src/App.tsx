import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Page/Home";
import Comapny from "./Page/Comapny";
import CreateJob from "./Page/CreateJob";
import Job from "./Page/Job";
import Login from "./Page/Login";
import Layout from "./Page/Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/companies/:id" element={<Comapny />} />
        <Route path="/jobs/job/:id" element={<Job />} />
        <Route path="/jobs/new" element={<CreateJob />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
