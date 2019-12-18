import axios from 'axios';
import clickTracking from './clickTracking';
import getGoogleAdsClickId from "../../lib/getGoogleAdsClickId";

jest.mock('axios');

jest.mock('../../lib/getGoogleAdsClickId', () =>  jest.fn(() => 'Tester-123'));

jest.mock('../../lib/getSessionId', () => jest.fn(() => 'session.123456'));

describe('Test clickTracking', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set the base url', () => {
        clickTracking('http://wwww.careship.de/acquisition/tracking');

        expect(axios.create).toHaveBeenCalledWith({
            baseURL: 'http://wwww.careship.de/acquisition/tracking'
        });
    });

    it('should call click tracking endpoint if click id exists', () => {
        axios.create = jest.fn().mockReturnValue(axios);

        clickTracking('http://wwww.careship.de/acquisition/tracking').recordClick();

        expect(axios.post)
            .toHaveBeenCalledWith('/record-click', {"click_id": "Tester-123", "session_id": "session.123456"});
    });

    it('should not call click tracking endpoint if click id does not exists', () => {
        getGoogleAdsClickId.mockReturnValue(null);

        axios.create = jest.fn().mockReturnValue(axios);

        clickTracking('http://wwww.careship.de/acquisition/tracking').recordClick();

        expect(axios.post).toHaveBeenCalledTimes(0);
    });
});
