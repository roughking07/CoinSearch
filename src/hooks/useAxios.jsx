import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState(undefined);
	const [error, setError] = useState("");
	const [loading, setloading] = useState(true);

	const fetchData = async (params) => {
		try {
			const result = await axios.request(params);
			setResponse(result.data);
		} catch (error) {
			setError(error);
		} finally {
			setloading(false);
		}
	};

	useEffect(() => {
		fetchData(axiosParams);
	}, []); // execute once only

	return { response, error, loading };
};

export default useAxios;
