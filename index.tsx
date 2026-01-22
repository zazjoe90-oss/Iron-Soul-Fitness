import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical Error: Root element #root not found in DOM.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React application:", error);
    rootElement.innerHTML = `
      <div style="color: white; padding: 20px; font-family: sans-serif; text-align: center;">
        <h1 style="color: #a3e635;">IRON & SOUL</h1>
        <p>Something went wrong during startup.</p>
        <pre style="font-size: 10px; color: #71717a;">${error instanceof Error ? error.message : String(error)}</pre>
        <button onclick="window.location.reload()" style="background: #a3e635; color: black; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">RETRY</button>
      </div>
    `;
  }
};

// Ensure DOM is fully ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}