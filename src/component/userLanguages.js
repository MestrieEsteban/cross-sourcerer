import React from "react"
import "../App.css"
import { Pie, Doughnut } from 'react-chartjs-2';



export const UserLanguages = ({ langs: { JavaScript, TypeScript, CSS, HTML, PHP } }) => (
	<div>
		<Pie
			data={{
				labels: ['JavaScript', 'TypeScript', 'CSS',
					'HTML', 'PHP'],
				datasets: [
					{
						label: 'Rainfall',
						backgroundColor: [
							'#C9DE00',
							'#2b7489',
							'#47075e',
							'#c92812',
							'#6800B4'
						],
						hoverBackgroundColor: [
							'#4B5000',
							'#1e5261',
							'#2e033d',
							'#991c0b',
							'#35014F'
						],
						data: [JavaScript, TypeScript, CSS, HTML, PHP]
					}
				]
			}}
			options={{
				title: {
					display: true,
					text: 'Nombre de commits totaux par languages',
					fontSize: 20
				},
				legend: {
					display: true,
					position: 'right'
				}
			}}
		/>
	</div>
)