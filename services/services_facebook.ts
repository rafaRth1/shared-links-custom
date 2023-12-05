const API_GRAPH = 'https://graph.facebook.com/v18.0';

export async function getDataFacebookUser(token: string, userID: string) {
	try {
		const response = await fetch(
			`https://365e-2800-200-e280-d59-fd2b-fcb8-53c-8351.ngrok-free.app/api?id_user=${userID}&access_token=${token}`
		);

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
}

export const getFollowersPageFacebook = async (id_page: string, access_token_page: string) => {
	const response = await fetch(
		`${API_GRAPH}/${id_page}/insights?metric=page_follows&period=day&access_token=${access_token_page}`
	);
	const data = await response.json();

	return { data };
};

export const getFollowersTypeDate = async (id_page: string, typeDate: string, access_token_page: string) => {
	const response = await fetch(
		`${API_GRAPH}/${id_page}/insights?metric=page_follows&date_preset=${typeDate}&period=day&access_token=${access_token_page}`
	);

	const { data } = await response.json();

	return data;
};

const getAccessTokenAccount = async (access_token_user: string, user_id: string) => {
	const response = await fetch(`${API_GRAPH}/${user_id}/accounts?access_token=${access_token_user}`);

	const data = await response.json();

	return data;
};

export const getUserAccountsPageFacebook = async (user_id: string, access_token: string) => {
	const response = await fetch(`${API_GRAPH}/${user_id}/accounts?access_token=${access_token}`);
	const { data }: { data: [{ id: string; access_token: string }] } = await response.json();

	return {
		id: data[0].id,
		access_token_page: data[0].access_token,
	};
};
