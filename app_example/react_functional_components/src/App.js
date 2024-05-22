//improrting css

import Welcome from "./components/welcom";
import Button from "react-bootstrap/Button";
import React from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutExample from "./components/layoutExample.js";
import StackExample from "./components/stackExample.js"; 
function App() {
  return (
    <div className="App">
      <hr />
      <Welcome/>
      <hr />
      {/* display the LayoutExample component */}
      <LayoutExample />
      <hr />
      {/* display the StackExample component */}
      <StackExample />
    </div>
  );
}
export default App;
