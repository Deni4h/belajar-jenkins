const add = require('./math');

test('Menambahkan 2 + 3 harusnya 5', () => {
    expect(add(2, 3)).toBe(5);
});
