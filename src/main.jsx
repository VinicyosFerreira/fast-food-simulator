import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home.jsx';
import MenuPage from './pages/Menu.jsx';
import OrdersPage from './pages/Orders.jsx';
import NotFoundPage from './pages/NotFound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/orders',
    element: <OrdersPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
