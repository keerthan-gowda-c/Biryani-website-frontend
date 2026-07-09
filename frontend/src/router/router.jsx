import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import Contact from '../pages/Contact/Contact';
import ProductPage from '../pages/ProductPage/ProductPage';

import LoginForm from '../components/Popups/LoginForm';


const my_router = createBrowserRouter(
    [
        {
            element: <App/>,
            children:[
                {
                    path:'/',
                    element:<HomePage/>
                },
                {
                    path:'/About',
                    element:<AboutPage/>
                },
                {
                    path:'/Contact',
                    element:<Contact/>
                },
                {
                    path:'/Menu',
                    element:<ProductPage/>
                },
                {
                    path:'/Order',
                    element:<LoginForm/>
                }
            ]
        }
    ]

);

export default my_router;