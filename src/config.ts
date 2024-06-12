export interface Config {
    apiKey: string
    authDomain: string
}

export const getConfig = (): Config => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (apiKey === undefined) {
        throw new Error("VITE_API_KEY is not defined");
    }
    const authdomain = import.meta.env.VITE_AUTH_DOMAIN;
    if (authdomain === undefined) {
        throw new Error("VITE_AUTH_DOMAIN is not defined");
    }

    return {
        apiKey: apiKey,
        authDomain: authdomain,
    }
}