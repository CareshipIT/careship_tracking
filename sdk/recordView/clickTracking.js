import getSessionId from "../../lib/getSessionId";
import getGoogleAdsClickId from "../../lib/getGoogleAdsClickId";
import axios from 'axios';

export default function clickTracking(baseUrl) {
    const client = axios.create({
        baseURL: baseUrl
    });

    return {
        recordClick: () => {
            const clickId = getGoogleAdsClickId();

            if (typeof clickId === 'string') {
                client.post('/record-click', {
                    session_id: getSessionId(),
                    click_id: clickId
                });
            }
        }
    };
}
