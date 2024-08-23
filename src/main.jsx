import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'

// Pages
import App from './App.jsx'
import Landing from './Landing.jsx'
import Library from './Library.jsx'

import './css/index.css'

const library = <App body={<Library/>} />

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="/library" element={<Library/>} />
        </Route>
      </Routes>
    </BrowserRouter>
)
