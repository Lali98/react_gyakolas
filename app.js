var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    return React.createElement(
        'div',
        { className: 'text-center' },
        'React gyakorl\xF3 2. (JSX)',
        React.createElement(H2Component, { szovegSzin: 'blue', szoveg: 'Alc\xEDm 1' }),
        React.createElement(H2Component, { szovegSzin: 'green', szoveg: 'Alc\xEDm 2' }),
        React.createElement(H2Component, { szovegSzin: 'yellow', szoveg: 'Alc\xEDm 3' }),
        React.createElement(H2Component, { szovegSzin: 'purple', szoveg: 'Alc\xEDm 4' })
    );
}

function H2Component(props) {
    var _React$useState = React.useState(30),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        size = _React$useState2[0],
        setSize = _React$useState2[1];

    return React.createElement(
        'h2',
        { className: 'p-2 m-5 text-center', onClick: function onClick() {
                setSize(function (e) {
                    if (e > 60) {
                        return 30;
                    }
                    return e + 2;
                });
            }, style: { fontFamily: "cursive", color: props.szovegSzin, fontSize: size + 'px' } },
        props.szoveg
    );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));