import getSessionId from "./getSessionId";

test('sessionId is read from the cookie', () => {
    const gc = () => 'my_session_id'

    expect(
        getSessionId(gc)
    ).toBe('my_session_id');
});

test('sessionId is set and returned if not found in the cookie', () => {
    const gc = () => null
    const gsi = () => 'generated_session_id'

    expect(
        getSessionId(gc, undefined, undefined, gsi)
    ).toBe('generated_session_id');
});
