import Cookies from "js-cookie";
import { FC } from "react";
import { useUserQuery } from "../../hooks/api/authHooks";

export const AuthLogin: FC = () => {
	useUserQuery(Cookies.get("JWT_ACCESS_TOKEN") !== null);
	return null;
};
