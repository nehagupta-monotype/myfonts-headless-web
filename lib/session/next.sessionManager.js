import { getIronSession } from "./sessionManager";


export function withIronSessionApiRoute(handler, options) {
    return async function nextApiHandlerWrappedWithIronSession(req, res) {
        const session = await getIronSession(req, res, options);
        // we define req.session as being enumerable (so console.log(req) shows it)
        // and we also want to allow people to do:
        // req.session = { admin: true }; or req.session = {...req.session, admin: true};
        // req.session.save();
        Object.defineProperty(req, "session", getPropertyDescriptorForReqSession(session));
        return handler(req, res);
    };
}
export function withIronSessionSsr(handler, options) {
    return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {
        const session = await getIronSession(context.req, context.res, options);
        Object.defineProperty(context.req, "session", getPropertyDescriptorForReqSession(session));
        return handler(context);
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
                    // @ts-ignore See comment in IronSessionData interface
                    delete session[key];
                }
            });
            keys.forEach((key) => {
                // @ts-ignore See comment in IronSessionData interface
                session[key] = value[key];
            });
        },
    };
}


