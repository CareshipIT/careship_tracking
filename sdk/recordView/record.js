import getVisitorId from "../../lib/getVisitorId";
import getSessionId from "../../lib/getSessionId";
import getClientId from "../../lib/getClientId";
import axios from 'axios';

export default function createRecorder(baseUrl) {
    const client = axios.create({
        baseURL: baseUrl
    })

    return (hostName, pagePath, urlParameters) => {
        sendMetrics(client, hostName, pagePath, urlParameters)
    };
}

/**
 * Submit key metrics to Careship inhouse tracking.
 *
 * Please don't `await` for this request, it should be fire-and-forget so it doesn't
 * slow down the user experience.
 */
export function record(baseUrl, hostName, pagePath, urlParameters) {
    createRecorder(baseUrl)(hostName, pagePath, urlParameters)
}

function sendMetrics(client, hostName, pagePath, urlParameters) {
    const payload = buildPayload(hostName, pagePath, urlParameters)
    client.post('/record-view', payload)
}

function buildPayload(hostName, pagePath, urlParameters) {
    return {
        visitor_id: getVisitorId(),
        session_id: getSessionId(),
        hit_timestamp: new Date().toISOString(),
        client_id: getClientId() || 'no_cid',
        host_name: hostName || '',
        page_path: pagePath || '',
        url_parameters: urlParameters || '',
    }
}
