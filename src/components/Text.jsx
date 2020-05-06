import React from 'react'

import './Text.css'

export default class Text extends React.Component {

    state = {
        text: this.props.text,
        color: null,
        font: null,
        bg: null,
        json: null
    }


    changeColor = () => {
        this.setState({
            color: 'red'
        })
    }

    changeFontSize = () => {
        this.setState({
            font: '28px'
        })
    }

    changeBgColor = () => {
        this.setState({
            bg: 'yellow'
        })
    }

    toJson = () => {
        for (const res in this.state) {
            const result = res+ ': ' + this.state[res];
            console.log(result);
            
        }
    }



    render() {
        const { text } = this.props
        const { textJson } = this.toJson;

        let styles = {}

        if (this.state.color) {
            styles.color = this.state.color
        }

        if (this.state.font) {
            styles.fontSize = this.state.font
        }

        if (this.state.bg) {
            styles.backgroundColor = this.state.bg
        }

        return (
            <div className="main" >
                <button onClick={this.changeColor}>Change Color</button>
                <button onClick={this.changeFontSize}>Change Font Size</button>
                <button onClick={this.changeBgColor}>Change Background Color</button>
                <button onClick={this.toJson}>JSON</button>
                <textarea className='text' style={styles}>
                    {text}
                </textarea>

                <span className='json'>
                    {this.result}
                </span>

            </div>
        );
    };
};