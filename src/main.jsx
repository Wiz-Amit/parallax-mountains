import React, { Suspense, lazy } from "react";
import AnimatedCursor from "react-animated-cursor";
import ReactDOM from "react-dom/client";
import Progress from "./Components/Progress.jsx";
import "./index.css";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={15}
      color="255, 255, 255"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
    <Suspense fallback={<Progress />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
