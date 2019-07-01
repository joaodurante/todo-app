import { env } from './environment';

function updateOptions(options: any) {
    const update = { ...options };
    if (localStorage.user_token) {
        update.headers = {
            ...update.headers,
            Authorization: `Bearer ${localStorage.user_token}`,
        };
    }
    return update;
}

const fetcher = (url: any, options: any) => {
    return fetch(url, updateOptions(options));
}

export { fetcher };