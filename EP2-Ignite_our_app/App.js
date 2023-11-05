/**
 * Adding heading using React
 *  
 * <div id="root">
 *  <h1> Hello World from React! </h1>
 * </div>
 * 
 */
import React from 'react'
import ReactDOM from 'react-dom'


const heading = React.createElement("h1", {id:"heading", xyz: "abc"}, "Hello world from new React!");

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


/**
 * <div id='parent'>
 *  <div id='child'>
 *      <h1>I am H1 tag </h1>
 *  </div>
 * </div> * 
 */

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
    React.createElement("h1", {}, "I am H1 tag"))
);

root.render(parent);



/**
 * <div id='parent'>
 *  <div id='child'>
 *      <h1> I am H1 tag </h1>
 *      <h2> I am H2 tag </h2>
 *  </div>
 * </div> 
 * 
 * ReactElement(Object) => HTML (browser understands)
 */

const parent2 = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"},
    [React.createElement("h1", {}, "I am H1 tag"),React.createElement("h2", {}, "I am H2 tag")])
);

root.render(parent2);


/**
 * <div id='parent'>
 *  <div id='child'>
 *      <h1> I am H1 tag </h1>
 *      <h2> I am H2 tag </h2>
 *  </div>
 *  <div id='child2'>
 *      <h1> I am H1 tag </h1>
 *      <h2> I am H2 tag </h2>
 *  </div>
 * </div> * 
 */

const parent3 = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div", {id: "child"},
    [React.createElement("h1", {}, "I am H1 tag"),React.createElement("h2", {}, "I am H22 tag")]),
    React.createElement("div", {id:"child2"}, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am in H2 tag")])
]
);

root.render(parent3);


 