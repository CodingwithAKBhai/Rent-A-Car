import { createRoot } from 'react-dom/client'
import './index.css' // Import the global CSS file
import App from './App.jsx' // Import the main App component
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter for client-side routing

// Get the root DOM element where the React application will be mounted
const rootElement = document.getElementById('root');

// Create a React root and render the App component wrapped in BrowserRouter
createRoot(rootElement).render(
  // BrowserRouter enables client-side routing for the application
  <BrowserRouter>
    {/* The main application component */}
    <App />
  </BrowserRouter>,
);
