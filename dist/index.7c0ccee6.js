const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "headd"
        }, "I am H1"),
        React.createElement("h2", {
            id: "sib"
        }, "I am H2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "headd"
        }, "I am H1"),
        React.createElement("h2", {
            id: "sib"
        }, "I am H2")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading",
    class: "card"
}, "Hello Master Prince!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // basic react ends here 

//# sourceMappingURL=index.7c0ccee6.js.map
