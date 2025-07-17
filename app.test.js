const { tambah, kurang } = require('./app');

describe('Fungsi Matematika Dasar', () => {
test('kurang(0, 5) harus menghasilkan -5', () => {
expect(kurang(0, 5)).toBe(-5);
});
});
