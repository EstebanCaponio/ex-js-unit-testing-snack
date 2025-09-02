const { getInitials, createSlug, average } = require('./snacks')

// snack1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Luigi Verdi')).toBe('LV');
});

// snack2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug('TEST')).toBe('test');
    expect(createSlug('TEST TEST2')).toBe('test test2');
});

// snack3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([5, 10, 15])).toBe(10);
});