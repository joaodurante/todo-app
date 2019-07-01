import { env } from './environment';

function updateOptions(options: any) {
    const update = { ...options };
    
    return update;
}

const fetcher = (url: any, options: any) => {
    return fetch(url, updateOptions(options));
}

export { fetcher };