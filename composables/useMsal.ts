import * as msal from "@azure/msal-browser";
import { useAuthStore } from '~/stores/authStore'

export default function useMsal() {


    onMounted(async () => {
        const config = useRuntimeConfig().public
        const authStore = useAuthStore();
        const msalConfig: msal.Configuration = {
            auth: {
                clientId: '071c145e-4ba5-4285-aabf-41c44d66bc12',
                authority: 'https://endlessexpansion.b2clogin.com/endlessexpansion.onmicrosoft.com/B2C_1_ee_dev_login_register',
                redirectUri: `${config.baseUrl}/blank`,
                knownAuthorities: ["endlessexpansion.b2clogin.com"],
            }
        };

        const login = async () => {
            authStore.loggingIn = true;
            const msalApp = new msal.PublicClientApplication(msalConfig);
            if (!authStore.account) {
                let silentRequest = {
                    scopes: [],
                    loginHint: authStore.username
                };
                if (authStore.username) {
                    try {
                        const loginResponse = await msalApp.ssoSilent(silentRequest);
                        if (loginResponse) {
                            authStore.setAccount(loginResponse.account, loginResponse.idToken);
                        }
                    }
                    catch (err) {
                        if (err instanceof msal.InteractionRequiredAuthError) {
                            const loginResponse = await msalApp.loginPopup(silentRequest).catch(error => {
                                console.error(error);
                            });

                            if (loginResponse) {
                                authStore.setAccount(loginResponse.account, loginResponse.idToken);
                            }
                        } else {
                            console.error(err);
                        }
                    }
                }
                else {
                    try {
                        const loginResponse = await msalApp.loginPopup();
                        if (loginResponse) {
                            authStore.setAccount(loginResponse.account, loginResponse.idToken);
                        }
                    } catch (err) {
                        console.error(err);
                    }
                }
            }
            authStore.loggingIn = false;
        }

        await login();
    })




}