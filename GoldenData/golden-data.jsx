var GoldenData = React.createClass({

    getInitialState: function () {
        return {items: [], isChange: [false], textValue: 0};
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
            textValue: 1
        });
    },
    inputs1: function () {
        this.setState({
            textValue: 2
        });
    },

    changed: function () {
        this.setState({isChange: !this.state.isChange});
    },

    aaa: function () {
        this.setState({
            items: inputArray(this.state.items, this.state.textValue)
        });
    },

    render: function () {

        if (this.state.isChange !== false) {
            return <div>
                <p>
                    <button className="ButtonCenter"
                            type="button" onClick={this.changed}>预览
                    </button>
                </p>
                <div>
                    <form className="TextRight">
                        <p>
                            <input
                                type="radio" name="1" onClick={this.inputs}/>文本框
                        </p>
                        <p>
                            <input type="radio" name="1" onClick={this.inputs1}/>日期
                        </p>
                    </form>
                    <button className="ButtonRight" type="button" onClick={this.aaa}>+</button>

                    <form className="outPut">

                        {this.state.items.map((item, index)=> {
                            if (item === 1) {
                                return <p>
                                    <input type="text"/>
                                    <button className="buttonPut" type="button"
                                            onClick={this.delText} value={index}>x
                                    </button>
                                </p>
                            }
                            else {
                                return <p>
                                    <input type="date"/>
                                    <button className="buttonPut" type="button"
                                            onClick={this.delDate} value={index}>x
                                    </button>
                                </p>
                            }

                        })
                        }
                    </form>
                </div>
            </div>
        }

        else {
            return <div>
                <button className="ButtonCenter" type="button" onClick={this.changed}>返回</button>
                <form  className="outPut">
                    {this.state.items.map((item)=> {
                        if (item === 1) {
                            return <p>
                                <input type="text"/>
                            </p>
                        }
                        else {
                            return <p>
                                <input type="date"/>
                            </p>
                        }

                    })
                    }
                </form>
                <button className="ButtonCenter" type="button">提交</button>
            </div>
        }


    }

});

ReactDOM.render(<GoldenData />, document.getElementById('123'));