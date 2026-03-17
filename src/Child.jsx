import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child Render");
  return <button onClick={onClick}>Child Button</button>;
});

export default Child
