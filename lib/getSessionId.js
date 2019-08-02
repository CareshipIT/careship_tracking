import { get as getCookie } from 'browser-cookies'

const KEY_FOR_SESSION_ID = 'collector.cs_rand_session_id'

const MILISECONDS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60
const ONE_HOUR = MILISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR

/**
 * Grabs a session ID previously created or generates a new one and saves it.
 */
export default function getSessionId() {
    let sessionId = getCookie(KEY_FOR_SESSION_ID)

    if (!sessionId) {
        sessionId = generateSessionId()
    }

    const targetDate = new Date(Date.now() + ONE_HOUR)

    document.cookie = `${KEY_FOR_SESSION_ID}=${sessionId}; expires=${targetDate.toUTCString()}; path=/; domain=careship.de`

    return sessionId
}

function generateSessionId() {
    return `${new Date().getTime()}.${Math.random().toString(36).substring(2)}`
}
