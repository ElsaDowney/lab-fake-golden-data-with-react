var GoldenData = React.createClass({

    getInitialState: function () {
        return {items: []};
    },

    inputs: function () {
        this.setState({
            items: inputArray(this.state.items, 1)
        });
    },
    inputs1: function () {
        this.setState({
            items: inputArray(this.state.items, 2)
        });
    },

    render: function () {
        return (
            <div>
                <p>
                    <button type="button" value="1" onClick={this.inputs}>文本框</button>
                </p>
                <p>
                    <button type="button" value="2" onClick={this.inputs1}>日期</button>
                </p>
                <ul>
                    {this.state.items.map((item, index)=> {
                        if (item === 1) {
                            return <li>
                                <input type="text" value=""/>
                                <button type="button">x</button>
                            </li>
                        }
                        else {
                            return <li>
                                <input type="date" value=""/>
                                <button type="button">x</button>
                            </li>
                        }

                    })
                    }
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<GoldenData />, document.getElementById('123'));