import React from "react"
import ReactDOM from "react-dom/client";

// Firstly creating the root element which is basially getting the root <div> from our index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element
// React.createElement => Object => render(Object) => HTMLElement
const heading = React.createElement("h1", {id: "heading"}, "Amit is here"); // heading is an object
console.log(heading);

// This is JSX which is basically again a React Element (so 9 === 13)
const jsxHeading = <h1>Namaste React using JSX</h1>;
console.log(jsxHeading);

root.render(jsxHeading);

// Functional component
const Title = () => (
    <h1 id="title">
        {jsxHeading}
    </h1>
)

// not working - since component name not starting with Capital letter
const title = () => (
    <h1 id="title">
        Amit is Super Awesome
    </h1>
)

const Heading = () => (
    <div id="container">
        <Title/>
        {Title()}
        <h2>You are writing Composite Component</h2>
    </div>
)

root.render(<Heading/>)


