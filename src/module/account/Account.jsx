import { hot } from 'react-hot-loader/root';
import React from 'react';
import { connect } from 'dva';
import { Select } from 'antd';
import { Line, Bar } from 'react-chartjs-2';
import "./Account.scss";
const { Option } = Select;
class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCountries: ''
        };
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({ nameCountries: value });
        this.props.dispatch({ type: "ncov-19/ncoviCountries", payload: value });
    }
    render() {
        const { nameCountries } = this.state;
        const { countries, confirmed, recovered, deaths, daily } = this.props;
        let renderCountries = countries.map(item => {
            return <Option key={item.name} value={item.name}>{item.name}</Option>;
        });



        const barChart = (
            confirmed ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [
                            {
                                label: 'People',
                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                data: [confirmed.value, recovered.value, deaths.value],
                            },
                        ],
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${nameCountries}` },
                    }}
                />
            ) : null
        );

        const lineChart = (
            daily[0] ? (
                <Line
                    options={{ title: { display: true, text: "Global", position: "bottom" } }}
                    data={{
                        labels: daily.map(({ date }) => date),
                        datasets: [{
                            data: daily.map((data) => data.confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: daily.map((data) => data.deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        },
                        ],
                    }}
                />
            ) : null
        );

        return (
            <div className="content">
                <div>
                    <label>View detail countrie: </label>
                    <Select value={nameCountries} style={{ width: 420 }} onChange={this.handleChange}>
                        <Option key={'1'} value={""}>Global</Option>
                        {renderCountries}
                    </Select>
                </div>
                <div className="container">
                    {nameCountries ? barChart : lineChart}
                    {/* {lineChart}
                    {barChart} */}
                </div>
            </div>
        );
    }
}
function mapStatetoProps(state) {
    console.log("stata>>>>", state['ncov-19']);
    return { ...state['ncov-19'] };
}
export default hot(connect(mapStatetoProps)(Account));