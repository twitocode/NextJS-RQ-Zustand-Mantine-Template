import { Box, Group, Text } from "@mantine/core";
import { FC } from "react";
import { useUserQuery } from "../../hooks/api/authHooks";
import { LoginModal } from "../auth/LoginModal";

export const Navbar: FC = () => {
	const { data: user } = useUserQuery(false);

	return (
		<Box color="white" sx={(theme) => ({ backgroundColor: theme.black })} px={20} py={20}>
			<Group position="apart" align="center">
				<Group>
					<Text size={"xl"} color="white" weight="bold">
						Todo-V2
					</Text>
				</Group>
				<Group align="center" spacing={4}>
					{!user && <LoginModal />}
				</Group>
			</Group>
		</Box>
	);
};
