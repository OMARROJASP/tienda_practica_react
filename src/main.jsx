import React from 'react'
import ReactDOM from 'react-dom/client'
import {PaginaPrincipal} from "./PaginaPrincipal.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <PaginaPrincipal />
      </BrowserRouter>

  </React.StrictMode>,
)
