  import React from "react";
  import ReactDOM  from "react-dom/client";
  
    const h1=React.createElement("div",{},
    React.createElement("div",{},[React.createElement("h1",{},"Welcome to React"),React.createElement("h1",{},"Lets Start")]
    ));

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(h1)
