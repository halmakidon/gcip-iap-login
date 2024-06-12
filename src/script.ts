import "firebaseui/dist/firebaseui.css";
import "./style.css";

import {GoogleAuthProvider, EmailAuthProvider} from "firebase/auth";
import * as firebaseui from "firebaseui";
import * as ciap from "gcip-iap";
import CIAPHandlerConfig = firebaseui.auth.CIAPHandlerConfig;
import {getConfig} from "./config.ts";

const config = getConfig();
const tenantsConfig: Record<string, firebaseui.auth.TenantConfig> = {
    "_": {
        displayName: "Test Project",
        signInOptions: [
            {
                provider: GoogleAuthProvider.PROVIDER_ID,
            },
            {
                provider: EmailAuthProvider.PROVIDER_ID,
                signInMethod: EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
            }
        ],
    },
};

const configs: Record<string, CIAPHandlerConfig> = {
    [config.apiKey]: {
        displayMode: "optionFirst",
        authDomain: config.authDomain,
        tenants: tenantsConfig,
    }
};

// This will handle the underlying handshake for sign-in, sign-out,
// token refresh, safe redirect to callback URL, etc.
const handler = new firebaseui.auth.FirebaseUiHandler(
    "#firebaseui-container",
    configs
);
const ciapInstance = new ciap.Authentication(handler);
ciapInstance.start();
