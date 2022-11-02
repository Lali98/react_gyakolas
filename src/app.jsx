/*function App() {
    return React.createElement("div", {},
        React.createElement("h1", {
            className: 'text-center',
        }, "React gyakorló 2."),
        React.createElement(H2Component, {szovegSzin: "blue", szoveg: "Alcím 1"}),
        React.createElement(H2Component, {szovegSzin: "green", szoveg: "Alcím 2"}),
        React.createElement(H2Component, {szovegSzin: "yellow", szoveg: "Alcím 3"}),
        React.createElement(H2Component, {szovegSzin: "purple", szoveg: "Alcím 4"})
    );
}

function H2Component(props) {
    return React.createElement("h2",
        {
            style: {
                fontFamily: "cursive",
                color: props.szovegSzin,
            },
            className: "p-2 m-5 text-center"
        }, props.szoveg);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));*/

function App() {
    return (
        <div className="text-center">
            React gyakorló 2. (JSX)
            <H2Component szovegSzin='blue' szoveg='Alcím 1'/>
            <H2Component szovegSzin='green' szoveg='Alcím 2'/>
            <H2Component szovegSzin='yellow' szoveg='Alcím 3'/>
            <H2Component szovegSzin='purple' szoveg='Alcím 4'/>
        </div>
    )
}

function H2Component(props) {
    const [size, setSize] = React.useState(30);
    return (
        <h2 className="p-2 m-5 text-center" onClick={() => {
            setSize((e) => {
                if(e > 60) {
                    return 30;
                }
                return e + 2;
            })
        }} style={{fontFamily: "cursive", color: props.szovegSzin, fontSize: `${size}px`}}>{props.szoveg}</h2>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
