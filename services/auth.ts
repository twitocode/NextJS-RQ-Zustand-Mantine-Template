import { Credentials, User } from "../types/user";
import { axios } from "./axios";

interface UserAuthResponse {
	user: User;
}

interface UserWithTokenAuthResponse extends UserAuthResponse {
	token: string;
}

export const fetchLogin = async (data: Credentials) => {
	const res = await axios.post<UserWithTokenAuthResponse>("/auth/login", data);
	return res.data;
};

export const fetchRegister = async (data: Credentials) => {
	const res = await axios.post<UserWithTokenAuthResponse>("/auth/register", data);
	return res.data;
};

export const fetchUser = async () => {
	const res = await axios.get<UserAuthResponse>("/auth/user");
	return res.data.user;
};

export const fetchLoginWithGoogle = async (accessToken: string) => {
	const res = await axios.post<UserWithTokenAuthResponse>(`/auth/login-google?access_token=${accessToken}`);
	return res.data;
};

export {};
