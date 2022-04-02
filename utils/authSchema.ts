import * as yup from "yup";

export const AuthSchema = yup.object().shape({
	email: yup.string().email("Not an email").required("Required*").nullable(),
	password: yup.string().required("Required*").min(6, "Minimum of 6 Characters").nullable(),
});
