import getGoogleAdsClickId from "./getGoogleAdsClickId";
import {URL} from "./utils";
import URLSearchParams from "url-search-params";

jest.mock("./utils", () => ({
    URL: jest.fn(() => ({})),
}));

describe('Test clickTracking' , () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return google click id if present', () => {
        URL.mockImplementation(function () {
            return {
                hostname: 'careship.de',
                pathname: '',
                searchParams: new URLSearchParams('?gclid=Tester-123&param2=value2'),
                hash: '#gclid=0',
            };
        });

        expect(getGoogleAdsClickId()).toBe('Tester-123');
    });

    it('should return null if google click id is not present', () => {
        URL.mockImplementation(function () {
            return {
                hostname: 'careship.de',
                pathname: '',
                searchParams: new URLSearchParams('?param2=value2'),
                hash: '#gclid=0',
            }
        });

        expect(getGoogleAdsClickId()).toBe(null);
    });
});
