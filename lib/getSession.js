import nextSession from "next-session";
import signature from "cookie-signature";

const secret = "SkhVWUhrc3dkcmZpa3FkaWh6WVZGSEkmODIzNDg5amJhU0Q=";

const options = {
  name: process.env.SESSION_COOKIE_NAME,
  // decode: (raw) => signature.unsign(raw.slice(2), secret),
  // encode: (sid) => (sid ? "s:" + signature.sign(sid, secret) : null),
  cookie: {
    secure: false,
    httpOnly: true,
  }
}

export const getSession = nextSession(options);
