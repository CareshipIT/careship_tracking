import {URL} from "./utils"

/**
 *
 * @returns {string | null}
 */
export default function getGoogleAdsClickId () {
    return URL(window.location.href).searchParams.get('gclid');
};
