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
        this.setState({isChange: [Change(this.state.isChange)]});
    },

    aaa: function () {
        this.setState({
            items: inputArray(this.state.items, this.state.textValue)
        });
    },

    render: function () {
        return (
            <div>
                {this.state.isChange.map((item)=> {
                    "use strict";
                    if (item === false) {
                        return <div>
                            <form>
                            <p>
                                <button type="button" onClick={this.changed}>预览</button>
                            </p>

                                <p>
                                    <input type="radio" name="1" onClick={this.inputs}/>文本框
                                </p>
                                <p>
                                    <input type="radio" name="1" onClick={this.inputs1}/>日期
                                </p>

                            <button type="button" onClick={this.aaa}>+</button>


                                {this.state.items.map((item, index)=> {
                                    if (item === 1) {
                                        return <p>
                                            <input type="text"/>
                                            <button type="button"
                                                    onClick={this.delText} value={index}>x
                                            </button>
                                        </p>
                                    }
                                    else {
                                        return <p>
                                            <input type="date"/>
                                            <button type="button"
                                                    onClick={this.delDate} value={index}>x
                                            </button>
                                        </p>
                                    }

                                })
                                }
                            </form>
                        </div>
                    }


                    else {
                        return <div>
                            <button type="button" onClick={this.changed}>返回</button>
                            <form>
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
                            <button type="button">提交</button>
                        </div>
                    }


                })}


            </div>
        )
    }
});

ReactDOM.render(<GoldenData />, document.getElementById('123'));