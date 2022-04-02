import { Button, Group, LoadingOverlay, Modal, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { FC } from "react";
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from "react-google-login";
import { useLoginMutation, useLoginWithGoogleMutation } from "../../hooks/api/authHooks";
import { useAppStore } from "../../stores/useAppStore";
import { useErrorStore } from "../../stores/useErrorStore";
import { Credentials } from "../../types/user";
import { AuthSchema } from "../../utils/authSchema";

export const LoginModal: FC = () => {
	const toggleLoginModal = useAppStore((state) => state.toggleLoginModal);
	const loginError = useErrorStore((state) => state.loginError);

	const [opened, handlers] = useDisclosure(false, { onOpen: toggleLoginModal, onClose: toggleLoginModal });
	const loginWithGoogle = useLoginWithGoogleMutation();
	const login = useLoginMutation();

	const { signIn } = useGoogleLogin({
		clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
		onSuccess: async (r: GoogleLoginResponse | GoogleLoginResponseOffline) => {
			const response = r as GoogleLoginResponse;
			loginWithGoogle.mutate(response.accessToken);
		},
	});

	const form = useForm<Credentials>({
		initialValues: {
			email: "",
			password: "",
		},
		schema: yupResolver(AuthSchema),
	});

	const onSubmit = (values: Credentials) => {
		login.mutate(values);
	};

	return (
		<>
			<Modal opened={opened} onClose={handlers.close} title="Login" centered>
				<form onSubmit={form.onSubmit(onSubmit)}>
					<LoadingOverlay visible={login.isLoading || loginWithGoogle.isLoading} />
					<Group grow spacing={30} direction="column">
						<TextInput
							label="Email:"
							placeholder="Ex. johndoe@example.com"
							{...form.getInputProps("email")}
						/>
						<TextInput
							error={loginError}
							label="Password:"
							type="password"
							{...form.getInputProps("password")}
						/>
						<Group position="apart">
							<Button variant="light" onClick={signIn}>
								Login With Google
							</Button>
							<Button type="submit">Submit</Button>
						</Group>
					</Group>
				</form>
			</Modal>
			<Group position="center">
				<Button onClick={handlers.toggle}>Login</Button>
			</Group>
		</>
	);
};
