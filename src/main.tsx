import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.css';

const container = document.querySelector('#root');

if (!container) throw new Error("Could not find root element with id 'root'");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
