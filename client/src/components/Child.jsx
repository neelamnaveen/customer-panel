import React from "react";
function Child(){
    var Child = React.createClass({
        getInitialState : function () {
            return({hidden : "hidden"});
        },
        componentWillMount : function () {
            var that = this;
            setTimeout(function() {
                that.show();
            }, that.props.wait);
        },
        show : function () {
            this.setState({hidden : ""});
        },
        render : function () {
            return (
                <div className={this.state.hidden}>
                    <p>Child</p>
                </div>
            )
        }
    });
    
    var Parent = React.createClass({
        render : function () {
            return (
                <div className="parent">
                    <p>Parent</p>
                    <div className="child-list">
                        <Child wait={1000} />
                    </div>
                </div>
            )
        }
    });
}

export default Child;