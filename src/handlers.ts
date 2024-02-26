import { IHandler } from './interface';

/**
 * This is currently experimental while I decide on how I want to restructure the main code to make it easier to follow.
 * There will need to be handlers for each process of the "clean" as well as these custom cases for sites that mix it up.
 * If you would like to help or give your thoughts feel free to open an issue on GitHub.
 */
export const handlers: { [key: string]: IHandler } = {};

handlers['patchbot.io'] = {
    exec: (str, args) => {
        try {
            const dec = args[0].replace(/%3D/g, '=');
            return { url: decodeURIComponent(dec.split('|')[2]) };
        } catch (error) {
            if (`${error}`.startsWith('URIError')) error = 'Unable to decode URI component. The URL may be invalid';
            return { url: str, error };
        }
    }
};

handlers['stardockentertainment.info'] = {
    exec: (str) => {
        try {
            const target = str.split('/').pop();
            let url = '';

            if (typeof target == 'undefined') throw Error('Undefined target');

            if (typeof atob === 'undefined') {
                url = Buffer.from(target, 'base64').toString('binary');
            } else {
                url = atob(target);
            }

            return { url: url };
        } catch (error) {
            return { url: str, error };
        }
    }
};

handlers['0yxjo.mjt.lu'] = {
    exec: (str) => {
        try {
            const target = str.split('/').pop();
            let url = '';

            if (typeof target == 'undefined') throw Error('Undefined target');

            if (typeof atob === 'undefined') {
                url = Buffer.from(target, 'base64').toString('binary');
            } else {
                url = atob(target);
            }

            return { url: url };
        } catch (error) {
            return { url: str, error };
        }
    }
};
