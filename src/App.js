import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  const routes=createBrowserRouter([
    {
      path: '',element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:'movies',element:<Movies/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'*',element:<Notfound/>}
      ]
    }
  ])
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
