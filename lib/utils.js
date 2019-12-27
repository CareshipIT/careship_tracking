import URI from "urijs"
import URLSearchParams from "url-search-params";

/**
 *
 * @param url {string}
 * @returns {{protocol: *, hostname: *, hash: *, pathname: *, searchParams: URLSearchParams}}
 *
 * @constructor
 */
const URL = (url) => {
    const u = new URI(url);

    return {
        protocol: u.protocol(),
        hostname: u.hostname(),
        pathname: u.pathname(),
        searchParams: new URLSearchParams(u.search()),
        hash: u.hash(),
    }
};

export {
    URL
};
