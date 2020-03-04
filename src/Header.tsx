import * as React from 'react';
const logo = require('./assets/Logotyp01.svg')

class Header extends React.Component<any, any> {
    state = {
        lowScroll: false,
        items: this.props.items
    }

    componentWillMount() {
        var that = this
        addEventListener('scroll', event => {
            let scrollState = scrollY > 100
            if (scrollState !== that.state.lowScroll) {
                that.setState({
                    lowScroll: scrollState
                })
            }
        })
    }

    render() {
        return (
            <div className={"App-header" + (this.state.lowScroll ? ' clear' : '')}>
                <img src={logo} className="App-logo clickable" onClick={() => window.location.href = '/'}></img>
                <div className="header-items">
                    {/* {this.state.items.map((item, index) => {
              return ()
            })} */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Header