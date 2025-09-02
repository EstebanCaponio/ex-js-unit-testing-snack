const { getInitials, createSlug } = require('./snacks')

// snack1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Luigi Verdi')).toBe('LV');
});

// snack2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('TEST')).toBe('test');
    expect(createSlug('TEST TEST2')).toBe('test test2');
});