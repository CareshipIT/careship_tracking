import { get, set } from 'browser-cookies'

const KEY_FOR_SESSION_ID = 'collector.cs_rand_session_id'

const MILLISECONDS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60
const ONE_HOUR = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR

/**
 * Grabs a session ID previously created or generates a new one and saves it.
 */
export default function getSessionId(gc, sc, n, gsi) {
    const getCookie = gc || get
    const setCookie = sc || set
    const now = n || Date.now()
    const generateSessionId = gsi || generateRandomSessionId

    let sessionId = getCookie(KEY_FOR_SESSION_ID)

    if (!sessionId) {
        sessionId = generateSessionId()
    }

    const inOneHour = new Date(now + ONE_HOUR)

    setCookie(
        KEY_FOR_SESSION_ID,
        sessionId,
        {expires: inOneHour, path: '/', domain: 'careship.de'}
    )

    return sessionId
}

function generateRandomSessionId() {
    return `${new Date().getTime()}.${Math.random().toString(36).substring(2)}`
}
