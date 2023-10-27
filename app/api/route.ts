import { NextResponse } from 'next/server';

// curl -i -X GET \
//  "https://graph.facebook.com/v18.0/me?access_token=EAAZAWgw5ef1QBOzpZCHyxrgBOEJhfekTLpFqSptYlyyZCvkqFmouJvTqiDma28ZCaYUJ62HXJKHZCkSE7m437hbmeavQGHnXhuRMobq3AU0BabKWIeLO8AT6Y46KQZCePJlbX8HjxVIJwBS2WHOwFFBLQByDgYI9Tj1wl86OUf11DDRbA0vcANpCZC3YciWS3ci5ZAErse4HWZCYFukKDhvwCGZCPldpcZD"

export async function GET(request: Request) {
	const res = await fetch(
		'https://graph.facebook.com/v18.0/me?access_token=EAAZAWgw5ef1QBOzpZCHyxrgBOEJhfekTLpFqSptYlyyZCvkqFmouJvTqiDma28ZCaYUJ62HXJKHZCkSE7m437hbmeavQGHnXhuRMobq3AU0BabKWIeLO8AT6Y46KQZCePJlbX8HjxVIJwBS2WHOwFFBLQByDgYI9Tj1wl86OUf11DDRbA0vcANpCZC3YciWS3ci5ZAErse4HWZCYFukKDhvwCGZCPldpcZD'
	);
	const data = await res.json();

	return NextResponse.json(data);
}

export async function OPTIONS(request: Request) {}
