import React from 'react'
import ReactDOM from 'react-dom/client'

import { ConfigProvider } from "antd"
import "antd/dist/reset.css"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider 
      theme={{
        token: {
          colorPrimary: "#2123bf",
        },
      }}>
      <App />
    </ConfigProvider>  
    </React.StrictMode>,
)
