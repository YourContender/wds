import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./main.scss";
import { App } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <App/>
    </div>
  </StrictMode>,
)
