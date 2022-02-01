import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { getIronSession } from "iron-session";
// import { withIronSessionApiRoute, withIronSessionSsr } from "./next.sessionManager";
// import { getIronSession } from "./sessionManager";

const sessionOptions = {
  password: "SkhVWUhrc3dkcmZpa3FkaWh6WVZGSEkmODIzNDg5amJhU0Q=",
  cookieName: process.env.SESSION_COOKIE_NAME,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
  },
};

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}

export async function getSession(req, res) {
  return await getIronSession(req, res, sessionOptions);
}
