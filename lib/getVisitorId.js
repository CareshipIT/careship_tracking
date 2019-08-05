import { get, set } from 'browser-cookies'

const KEY_FOR_VISITOR_ID = 'collector.cs_rand_uid'

/**
 * Grabs a user ID previously created or generates a new one and saves it.
 */
export default function getVisitorId(gc, sc, gu) {
    const getCookie = gc || get
    const setCookie = sc || set
    const generateUuid = gu || generateRandomUuid

    let visitorId = getCookie(KEY_FOR_VISITOR_ID)

    if (!visitorId) {
        visitorId = generateUuid()
    }

    const inTenYears = new Date(new Date().setFullYear(new Date().getFullYear() + 10))

    setCookie(
        KEY_FOR_VISITOR_ID,
        visitorId,
        {path: '/', domain: 'careship.de', expires: inTenYears}
    )

    return visitorId
}

function generateRandomUuid() {
    let currentTime = new Date().getTime()

    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
        const r = (currentTime + Math.random()*16)%16 | 0
        currentTime = Math.floor(currentTime/16)
        return (char === 'x' ? r :(r&0x3|0x8)).toString(16)
    })

    return uuid
}
