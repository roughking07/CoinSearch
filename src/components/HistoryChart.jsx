import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const HistoryChart = () => {
	// const { id } = useParams();
	const params = useParams();
	const { response } = useAxios(
		`coins/${params.coinId}/market_chart?vs_currency=inr&days=7`
	);
	console.log(params.coinId);
	if (!response) {
		return <div>Loading...</div>;
	}
	const coinChartData = response.prices.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));

	const options = {
		responsive: true,
	};
	const data = {
		labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
		datasets: [
			{
				fill: true,
				label: params.coinId,
				data: coinChartData.map((val) => val.y),
				borderColor: "#ffffff",
				backgroundColor: "rgba(105, 0, 255, 0.5)",
			},
		],
	};

	return (
		<div>
			<Line options={options} data={data} />
		</div>
	);
};

export default HistoryChart;
