import getVisitorId from "./getVisitorId";

test('visitorId is read from the cookie', () => {
    const gc = () => 'my_visitor_id'

    expect(
        getVisitorId(gc)
    ).toBe('my_visitor_id');
});

test('visitorId is set and returned if not found in the cookie', () => {
    const gc = () => null
    const gvi = () => 'generated_visitor_id'

    expect(
        getVisitorId(gc, undefined, gvi)
    ).toBe('generated_visitor_id');
});
