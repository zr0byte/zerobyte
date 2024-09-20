import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import

const App = () => {
  return <h1>Hello, React!</h1>;
};

// Create a root and render the App component
const root = createRoot(document.getElementById('root'));
root.render(<App />);