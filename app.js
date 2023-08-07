import React from "react";
import ReactDOM from "react-dom/client";

// ep 3 start here


// React Element

// React.craeteElement => reactElement-JS Object => HTMlElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX is html like syntex






// JSX is not a valid syntex 
// JAX is transpiled byparcel using bable before it goes to JS engine 


const Head = () => {
    return (
        <>

            <>
                <h1>
                    Prince
                </h1>
                <h1>
                    Kumar
                </h1>
            </>


            <div>
                <h1>
                    Paswan
                </h1>
            </div>
        </>
    )
}

const jxsHeading = <h1>Namaste React using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Head />);

























// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div", { id: "child" }, [
//         React.createElement("h1", { id: "headd" }, "I am H1"),
//         React.createElement("h2", { id: "sib" }, "I am H2"),
//     ]), React.createElement("div", { id: "child2" },
//         [
//             React.createElement("h1", { id: "headd" }, "I am H1"),
//             React.createElement("h2", { id: "sib" }, "I am H2"),
//         ])]
// );

// // const heading = React.createElement(
// //     "h1",
// //     { id: "heading", class: "card" },
// //     "Hello Master Prince!"
// // );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// // basic react ends here 