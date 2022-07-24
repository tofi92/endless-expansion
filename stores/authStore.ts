import { defineStore } from 'pinia'
import * as msal from "@azure/msal-browser";

export const useAuthStore = defineStore('auth', {
    state: () => {
        let account!: msal.AccountInfo;
        let username: string = "";
        let loggingIn: Boolean = false;
        let token: string;
        return {
            account,
            username,
            loggingIn,
            token
        }
    },
    actions: {
        setAccount(account: msal.AccountInfo, token: string) {
            this.account = account;
            this.username = account.username;
            this.loggingIn = false;
            this.token = token;
            window.localStorage.setItem('endlessexpansion:username', account.username);
        },
        logout() {
            this.account = null;
            this.username = '';
            this.loggingIn = false;
            this.token = null;
            window.localStorage.removeItem('endlessexpansion:username');
        }
    },
    async hydrate(storeState) {
        console.log("Hydrating auth store")
        const username = window.localStorage.getItem('endlessexpansion:username');
        storeState.username = username;

    }
});