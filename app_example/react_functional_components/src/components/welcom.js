// import react from "react";

// function welcome(props) {
//   return (
//     <div>
//       <h1>hello World, {props.name} </h1>
//     </div>
//   );
// }

// export default welcome;

//Importing React
import React from "react";
//Create the Welcome Component
function Welcome(props) {
  return (
    <div>
      {/* This h1 element uses JSX to display the name property of the props
object */}
      <h1>Hello World, {props.name} ({props.age})</h1>
    </div>
  );
}
export default Welcome;
