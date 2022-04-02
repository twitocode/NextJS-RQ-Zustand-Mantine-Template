import { useMutation } from "react-query";
import { client } from "../../services/react-query";
import { fetchCreateLabel, fetchCreateList } from "../../services/user";

export function useCreateLabelMutation() {
	return useMutation({
		mutationFn: fetchCreateLabel,
		onSuccess: (data) => {
			client.setQueryData("user", data.user);
		},
	});
}

export function useCreateListMutation() {
	return useMutation({
		mutationFn: fetchCreateList,
		onSuccess: (data) => {
			client.setQueryData("user", data.user);
		},
	});
}
