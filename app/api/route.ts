import { NextRequest, NextResponse } from 'next/server';

const APP_ID_FACEBOOK = '1783970742042452';
const APP_SECRET = '596e6287fad66d5d0460f7bee4b65725';
const FACEBOOK_GRAPH_URL = 'https://graph.facebook.com';
const REDIRECT_URI = 'https://dfaf-2800-200-e280-d59-7c7b-fad1-b87f-d5d5.ngrok-free.app/settings';

export async function GET(req: NextRequest, res: Response) {
	const accessTokenUser = req.nextUrl.searchParams.get('access_token');
	const userID = req.nextUrl.searchParams.get('id_user');
	const {
		data: [{ id, access_token: accessTokenPage }],
	}: { data: [{ id: string; access_token: string }] } = await getAccessTokenAccount(
		accessTokenUser!,
		userID!
	);

	// const { data } = await getPageFollowers(id, accessTokenPage);
	const dataPageFields = await getPageFields(id, accessTokenPage);
	const { data: dataImpression } = await getPageImpressions(id, accessTokenPage);
	const { data: dataInteraction } = await getPageInteractions(id, accessTokenPage);

	return NextResponse.json({
		// total_follows_time: data,
		data_page_fields: dataPageFields,
		data_impression: dataImpression,
		data_interaction: dataInteraction,
	});
}

const getAccessTokenAccount = async (access_token_user: string, user_id: string) => {
	const response = await fetch(`${FACEBOOK_GRAPH_URL}/${user_id}/accounts?access_token=${access_token_user}`);

	const data = await response.json();

	return data;
};

const getPageFollowers = async (page_id: string, access_token_page: string) => {
	const response = await fetch(
		`${FACEBOOK_GRAPH_URL}/v18.0/${page_id}/insights?metric=page_follows&access_token=${access_token_page}`
	);

	const data = await response.json();

	return data;
};

const getPageInteractions = async (page_id: string, access_token_page: string) => {
	const response = await fetch(
		`${FACEBOOK_GRAPH_URL}/v18.0/${page_id}/insights?metric=page_engaged_users&period=days_28&access_token=${access_token_page}`
	);

	const data = await response.json();

	return data;
};

const getPageImpressions = async (page_id: string, access_token_page: string) => {
	const response = await fetch(
		`${FACEBOOK_GRAPH_URL}/v18.0/${page_id}/insights?metric=page_impressions_unique&period=days_28&access_token=${access_token_page}`
	);

	const data = await response.json();

	return data;
};

const getPageFields = async (page_id: string, access_token_page: string) => {
	const response = await fetch(
		`${FACEBOOK_GRAPH_URL}/v18.0/${page_id}?fields=followers_count,about,cover,emails,fan_count,genre,link,name,picture&access_token=${access_token_page}`
	);

	const data = await response.json();

	return data;
};
