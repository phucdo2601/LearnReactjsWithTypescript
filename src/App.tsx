import React from 'react';
import RoutePages from './RoutePages';
import "../src/style.css"
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">


      {/* Application */}

      {/* Sidebar  */}
      <Sidebar />

      {/* Inner container  */}
      <RoutePages />
    </div>
  );
}

export default App;
