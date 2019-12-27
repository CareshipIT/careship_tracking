import record from "../record";
import clickTracking from "../clickTracking";
import {URL} from "../../../lib/utils"

const currentUrl = URL(window.location.href);
const apiBaseUrl = window.trackingApiBaseUrl || `${currentUrl.protocol}://${currentUrl.hostname}/acquisition/tracking`;

record(apiBaseUrl, currentUrl.hostname, currentUrl.pathname, currentUrl.searchParams + currentUrl.hash);
clickTracking(apiBaseUrl).recordClick();
