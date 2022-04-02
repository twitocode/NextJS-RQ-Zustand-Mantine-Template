import { useNotifications } from "@mantine/notifications";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import Router from "next/router";
import { useMutation, useQuery } from "react-query";
import { fetchLogin, fetchLoginWithGoogle, fetchRegister, fetchUser } from "../../services/auth";
import { client } from "../../services/react-query";
import { useAppStore } from "../../stores/useAppStore";
import { useErrorStore } from "../../stores/useErrorStore";

export function useLoginMutation() {
	const notifications = useNotifications();

	return useMutation({
		mutationFn: fetchLogin,
		onError: (err: AxiosError) => {
			console.log(err.response);

			notifications.showNotification({
				message: err.response?.data.message,
				title: "Login Error",
				color: "red",
			});
			useErrorStore.getState().setLoginError(err.response?.data.message);
		},
		onSuccess: (data) => {
			Cookies.set("JWT_ACCESS_TOKEN", data.token);
			client.setQueryData("user", data.user);

			useAppStore.getState().toggleLoginModal();
			Router.push("/todos");
		},
	});
}

export function useLoginWithGoogleMutation() {
	const notifications = useNotifications();

	return useMutation({
		mutationFn: fetchLoginWithGoogle,
		onError: (err: AxiosError) => {
			notifications.showNotification({
				message: err.response?.data.message,
				title: "Login Error",
				color: "red",
			});
			useErrorStore.getState().setLoginError(err.response?.data.message);
		},
		onSuccess: (data) => {
			Cookies.set("JWT_ACCESS_TOKEN", data.token);
			client.setQueryData("user", data.user);

			useAppStore.getState().toggleLoginModal();
			Router.push("/todos");
		},
	});
}

export function useRegisterMutation() {
	return useMutation({
		mutationFn: fetchRegister,
		onError: (err: AxiosError) => {
			console.log(err);
			useErrorStore.getState().setRegisterError(err.response?.data.message);
		},
		onSuccess: (data) => {
			Cookies.set("JWT_ACCESS_TOKEN", data.token);
			client.setQueryData("user", data.user);

			useAppStore.getState().toggleRegisterModal();
			Router.push("/todos");
		},
	});
}

export function useUserQuery(enabled = false) {
	return useQuery(["user"], {
		queryFn: (a) => fetchUser(),
		enabled,
	});
}
