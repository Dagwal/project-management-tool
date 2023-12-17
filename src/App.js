// src/App.js
import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import SampleUI from "./components/NavbarSimple";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SampleUI />
    </MantineProvider>
  );
}

export default App;
