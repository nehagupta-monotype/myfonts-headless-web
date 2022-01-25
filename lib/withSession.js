import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { getIronSession } from "iron-session";

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

export async function withSessionApp(handler) {
  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(appContext) {
    console.log("in withSessionApp")
    const session = await getIronSession(appContext.ctx.req, appContext.ctx.res, sessionOptions);
    Object.defineProperty(appContext.ctx.req, "session", getPropertyDescriptorForReqSession(session));
    return handler(appContext.ctx);
  };
}


function getPropertyDescriptorForReqSession(session) {
  return {
    enumerable: true,
    get() {
      return session;
    },
    set(value) {
      const keys = Object.keys(value);
      const currentKeys = Object.keys(session);
      currentKeys.forEach((key) => {
        if (!keys.includes(key)) {
          delete session[key];
        }
      });
      keys.forEach((key) => {
        session[key] = value[key];
      });
    }
  };
}
