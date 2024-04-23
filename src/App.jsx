import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";

import UseState from "./pages/UseState";
import UseCallback from "./pages/UseCallback";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import Staggering from "./pages/Staggering";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />

      <Route path="use-state" element={<UseState />} />
      <Route path="use-effect" element={<UseEffect />} />
      <Route path="use-memo" element={<UseMemo />} />
      <Route path="use-callback" element={<UseCallback />} />

      <Route path="staggering-animation" element={<Staggering />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
