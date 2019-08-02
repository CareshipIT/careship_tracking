import getClientId from "./getClientId";
import {JSDOM} from "jsdom";

test('getClientId returns "no_cid" when no client id could be found', () => {
    const dom = new JSDOM(`<!DOCTYPE html>`);
    const gc = () => ''

    expect(
        getClientId(dom.window, gc)
    ).toBe('no_cid');
});

test('getClientId returns value from window.ga', () => {
    const dom = new JSDOM(`<!DOCTYPE html>`);
    const gc = () => ''

    dom.window.ga = function() {}
    dom.window.ga.getAll = function() {
        return [
            {
                get: () => { return 'some_client_id' }
            }
        ]
    }

    expect(
        getClientId(dom.window, gc)
    ).toBe('some_client_id');
});

test('getClientId returns value from cookie', () => {
    const dom = new JSDOM(`<!DOCTYPE html>`);
    const gc = () => 'some_client_id'

    expect(
        getClientId(dom.window, gc)
    ).toBe('some_client_id');
});
