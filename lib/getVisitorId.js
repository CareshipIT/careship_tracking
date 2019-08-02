import { get as getCookie } from 'browser-cookies'
import { generateUUID } from '@/mixins/utils'

const KEY_FOR_VISITOR_ID = 'collector.cs_rand_uid'

/**
 * Grabs a user ID previously created or generates a new one and saves it.
 */
export default function getVisitorId(): string {
    let visitorId = getCookie(KEY_FOR_VISITOR_ID)

    if (!visitorId) {
        visitorId = generateUUID()
    }

    const inTenYears = new Date(new Date().setFullYear(new Date().getFullYear() + 10))
    document.cookie = `${KEY_FOR_VISITOR_ID}=${visitorId}; path=/; domain=careship.de; expires=${inTenYears.toUTCString()}`

    return visitorId
}
