import React from 'react';

export default class CalculatedAnswers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: {
                delta_x: props.delta_x,
                p_n: 120
            }
        }
    }

    render() {
        return (
            <div>
                <label>
                    Given:
                </label>
                <p>{this.state.answers.delta_x}</p>
                <p>{this.state.answers.p_n}</p>
            </div>
        );
    }
}