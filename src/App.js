import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <section className="container min-vh-100">
      <div className=" min-vh-100">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <ToastContainer />
    </section>
  );
}

export default App;
