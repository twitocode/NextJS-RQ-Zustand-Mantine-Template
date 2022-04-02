import type { NextPage } from "next";
import Head from "next/head";
import { AuthLogin } from "../components/auth/AuthLogin";
import { Navbar } from "../components/shared/Navbar";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Client</title>
			</Head>
			<>
				<AuthLogin />
				<Navbar />
			</>
		</>
	);
};

export default Home;
