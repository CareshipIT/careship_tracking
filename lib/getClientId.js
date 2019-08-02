import { get as getCookie } from 'browser-cookies'

export default function getClientId() {
    if (typeof window.ga === 'function' && window.ga.hasOwnProperty('getAll')) {
        return window.ga.getAll()[0].get('clientId')
    }

    const gaCookieValue = getCookie('_ga')

    if (gaCookieValue) {
        return gaCookieValue.split('.').slice(-2).join('.')
    }

    return 'no_cid'
}
