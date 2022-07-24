export interface ILocales {
    [key: string]: {
        name: string;
        iso: string;
    };
}

export const availableLocales: ILocales = {
    "en-US": {
        name: "English",
        iso: "en-US",
    },
    "de-DE": {
        name: "Deutsch",
        iso: "de-DE",
    },
};