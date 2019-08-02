import { get } from 'browser-cookies'

const domWindow = window;

export default function getClientId(w, gc) {
    const window = w || domWindow
    const getCookie = gc || get

    if (typeof window.ga === 'function' && window.ga.hasOwnProperty('getAll')) {
        return window.ga.getAll()[0].get('clientId')
    }

    const gaCookieValue = getCookie('_ga')

    if (gaCookieValue) {
        return gaCookieValue.split('.').slice(-2).join('.')
    }

    return 'no_cid'
}
