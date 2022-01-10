import { NextRequest, NextResponse } from "next/server";
export const USER_TOKEN = "user-token";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies[USER_TOKEN];
  const response = NextResponse.next();
  const url = process.env.API_URI;
  if (!cookie) {
    const tokenReq = await fetch(url + "1.2/oauth/v2/token", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        grant_type: "urn:letsdeal:anonymous",
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
      }),
    }).then((res) => res.json());

    const accessToken = tokenReq.access_token;
    response.cookie(USER_TOKEN, accessToken);
  }
  return response;
}
