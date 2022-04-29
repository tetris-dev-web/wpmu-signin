import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import "./styles/style.scss"
import "./styles/responsive.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path={"/"} element={<SignIn />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route element={<NotFound />} />
      </Routes >
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);