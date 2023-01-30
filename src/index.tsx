import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { render, hydrate } from "react-dom";
import { App } from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
// const root = createRoot(rootElement);

const InnerApp = (
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" />
    <App />
  </React.StrictMode>
)

if (rootElement.hasChildNodes()) {
	hydrate(InnerApp, rootElement);
} else {
	render(InnerApp, rootElement);
}
