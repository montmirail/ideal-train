import React, {Component} from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    fetchValues = async () => {
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data });
    };

    fetchIndexes = async () => {
        const values = await axios.get('/api/values/all');
        this.setState({ seenIndexes: values.data });
    };

    renderSeenIndexes = () => this.state.seenIndexes.map(({ number }) => number).join(', ');

    renderValues = () => {
        const entries = [];

        for(let key in this.state.values) {
            entries.push(
                <div key={key}>
                    For {key} I calculated {this.state.values[key]}
                </div>
            )
        }

        return entries;
    };

    onSubmit = async  e => {
        e.preventDefault();

        await axios.post('/api/values', {
            index: this.state.index
        });

        this.setState({index: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Enter your index</label>
                    <input
                        type="text"
                        value={this.state.index}
                        onChange={e => this.setState({ index: e.target.value })}
                    />
                    <button>Submit</button>
                </form>

                <h3>Indexes I have seen</h3>
                {this.renderSeenIndexes()}

                <h3>Calculated values</h3>
                {this.renderValues()}

            </div>
        )
    }
}

export default Fib;