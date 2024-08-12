import { routes } from "./routers/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const router = createBrowserRouter(routes);
import './App.css'
import { useState } from "react";
const theme = createTheme();

function App() {


  return (
    <>
     <ThemeProvider theme={theme}>

        <RouterProvider router={router} />
     </ThemeProvider>
    
   
    </>
  )
}

export default App
