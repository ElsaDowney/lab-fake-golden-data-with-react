var IsChanged = React.createClass({
    render: function () {
        console.log(this.props.value);
        return 
    }
});
var GoldenData = React.createClass({

    getInitialState: function () {
        return {items: [], isChange: false};
    },

    delText: function (e) {
        this.setState({
            items: deleteArray(this.state.items, e.target.value)
        });
    },
    delDate: function (e) {
        this.setState({
            items: deleteArray(this.state.items, e.target.value)
        });
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

    changed: function () {
        this.setState({isChange: !isChange});
    },

    render: function () {
        return (
            <div>

                <IsChanged value={this.state.isChange}/>

                <p>
                    <button type="button" onClick={this.changed}>预览</button>
                </p>
                <p>
                    <button type="button" value="1" onClick={this.inputs}>文本框</button>
                </p>
                <p>
                    <button type="button" value="2" onClick={this.inputs1}>日期</button>
                </p>
                <form>
                    {this.state.items.map((item, index)=> {
                        if (item === 1) {
                            return <p>
                                <input type="text"/>
                                <button type="button" onClick={this.delText} value={index}>x</button>
                            </p>
                        }
                        else {
                            return <p>
                                <input type="date"/>
                                <button type="button" onClick={this.delDate} value={index}>x</button>
                            </p>
                        }

                    })
                    }
                </form>
            </div>
        )
    }
});

ReactDOM.render(<GoldenData />, document.getElementById('123'));