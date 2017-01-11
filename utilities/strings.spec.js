import expect from 'expect';
import {parseNameToSlug} from './strings';

describe('parseNameToSlug', () => {
    const simple    = parseNameToSlug('Title');
    const dirty     = parseNameToSlug('Dir%y   Title');
    const manyWords = parseNameToSlug('Many Words');
    const veryLong  = parseNameToSlug('Very Long Title wich exceeds limits');
    const trailing  = parseNameToSlug('Trailing space ');

    it('should return a string', () => {
        expect(simple).toBeA('string');
    });
    it('should convert phrase to kebab case (only hyphens admitted)', () => {
        expect(dirty).toMatch(/([a-z0-9\-\_]+)/);
        expect(manyWords).toMatch(/([a-z0-9\-\_]+)/);
    });
    it('should return a string shorter than 20 charcters', () => {
        expect(veryLong.length).toBeLessThan(21);
    });
    it('should not return a string with trailing hyphens', () => {
        expect(trailing.slice(-1)).toMatch(/([a-z0-9]+)/);
    });


});