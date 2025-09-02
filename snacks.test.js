const { getInitials } = require('./snacks')

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Luigi Verdi')).toBe('LV');
});