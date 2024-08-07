import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from './Context/ShopContext.jsx'
import { AdminProvider } from './Context/AdminContext.jsx'
import { ClientProvider } from './Context/ClientContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminProvider>
      <ClientProvider >
        <ShopProvider>
          <App />
        </ShopProvider  >
      </ClientProvider>
    </AdminProvider>
  </React.StrictMode>
)
