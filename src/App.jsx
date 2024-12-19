import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as menuLoader } from './features/menu/Menu';
import { loader as orderLoader } from './features/order/Order';
import { action as createOrderAction } from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';

import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout></AppLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/menu',
          element: <Menu></Menu>,
          loader: menuLoader,
          errorElement: <Error></Error>,
        },
        {
          path: '/cart',
          element: <Cart></Cart>,
        },
        {
          path: '/order/new',
          element: <CreateOrder></CreateOrder>,
          action: createOrderAction,
          errorElement: <Error></Error>,
        },
        {
          path: '/order/:orderId',
          element: <Order></Order>,
          loader: orderLoader,
          errorElement: <Error></Error>,
          action: updateOrderAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}
