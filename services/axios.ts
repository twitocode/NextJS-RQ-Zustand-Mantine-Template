import _axios from "axios";
import Cookies from "js-cookie";
import { SERVER_URL } from "./constants";

export const axios = _axios.create({ baseURL: SERVER_URL });

axios.interceptors.request.use((config) => {
	const accessToken = Cookies.get("JWT_ACCESS_TOKEN");

	config.headers = {
		...config.headers,
		Authorization: `Bearer ${accessToken}`,
	};

	return config;
});