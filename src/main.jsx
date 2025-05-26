import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HashRouter,
  Routes,
  Route,} from 'react-router-dom'
import App from './App.jsx'
import StoreContextProvider from './context/Storecontext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
  <StoreContextProvider>
<App/>
  </StoreContextProvider>
  
 </HashRouter>
)
