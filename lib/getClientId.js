import { get } from 'browser-cookies'

const domWindow = window;

export default function getClientId(w, gc) {
    const window = w || domWindow
    const getCookie = gc || get

    if (window.ga && window.ga.loaded) {
        let clientId;
        window.ga((tracker) => {
            clientId = tracker.get('clientId')
        });

        if (clientId) {
            return clientId
        }
    }

    const gaCookieValue = getCookie('_ga')

    if (gaCookieValue) {
        return gaCookieValue.split('.').slice(-2).join('.')
    }

    return 'no_cid'
}
