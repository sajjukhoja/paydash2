import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';

class Lchart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData:{
			labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
			datasets:[
				{
					label:'$ Spent',
					data:[
						617594,
            181045,
            153060,
            106519,
            105162,
            95072
					],
					backgroundColor:[
						'rgba(255, 99, 132, 0.6)',
						'rgba(54, 162, 235, 0.6)',
						'rgba(255, 206, 86, 0.6)',
						'rgba(75, 192, 192, 0.6)',
						'rgba(153, 102, 255, 0.6)',
						'rgba(255, 159, 64, 0.6)',
						'rgba(255, 99, 132, 0.6)'
					]
				}
			]
		}
		} ;
	}

	render() {
		return (
			<Paper>
				<Bar
				  data={this.state.chartData}
					width={'30vw'}
				  height={'10vh'}
				  options={{}}
				/>
			</Paper>
		);
	}

}

export default Lchart;
