const test = require('ava');
const formatDate = require('../helpers/formatDate');

test('it should return a string', t => {
    const actual = typeof formatDate();
    const expected = 'string';

    t.is(actual, expected);
});

test('it should return 28th december 2018', t => {
    const actual = formatDate(2018, 12, 28);
    const expected = '2018-12-28';

    t.is(actual, expected);
});

test('it should return 10th october 2018', t => {
    const actual = formatDate(2018, 10, 10);
    const expected = '2018-10-10';

    t.is(actual, expected);
});

test('it should return 10th January 2018', t => {
    const actual = formatDate(2018, 1, 10);
    const expected = '2018-01-10';

    t.is(actual, expected);
});

test('it should return 1th January 2018', t => {
    const actual = formatDate(2018, 1, 1);
    const expected = '2018-01-01';

    t.is(actual, expected);
});

