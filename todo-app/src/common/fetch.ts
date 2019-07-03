function updateOptions(options: any) {
    const update = { ...options };
    if(localStorage.accessToken !== undefined && localStorage.accessToken !== {}){
        update.headers = {
            ...update.headers,
            Authorization: `Bearer ${localStorage.accessToken}`
        };
    }else{
        if(update.headers.accessToken !== undefined && update.headers.accessToken !== '')
            update.headers.accessToken = undefined;
    }
    return update;
}

const fetcher = (url: any, options: any) => {
    return fetch(url, updateOptions(options));
}

export { fetcher };