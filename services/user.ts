import { User } from "../types/user";
import { axios } from "./axios";

interface UserAuthResponse {
	user: User;
}

export const fetchCreateLabel = async (label: string) => {
	const res = await axios.post<UserAuthResponse>(`/user/label/${label}`);
	return res.data;
};

export const fetchCreateList = async (list: string) => {
	const res = await axios.post<UserAuthResponse>(`/user/list/${list}}`);
	return res.data;
};
