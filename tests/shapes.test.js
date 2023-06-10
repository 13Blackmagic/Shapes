const {circle,square, triangle, diamond} = require('./shapes');

describe('circle', () => {
    it('should return a circle', () => {
        expect(circle(4)).toEqual([
        '   ***   ',
        ' *     * ',
        '*       *',
        '*       *',
        '*       *',
        ' *     * ',
        '   ***   ',
        ]);
    });
    }
);

describe('square', () => {
    it('should return a square', () => {
        expect(square(4)).toEqual([
        '****',
        '*  *',
        '*  *',
        '****',
        ]);
    });
    }
);

describe('triangle', () => {
    it('should return a upTriangle', () => {
        expect(upTriangle(4)).toEqual([
        '   *   ',
        '  * *  ',
        ' *   * ',
        '*     *',
        ]);
    });
    }
);

describe('diamond', () => {
    it('should return a diamond', () => {
        expect(diamond(4)).toEqual([
        '   *   ',
        '  * *  ',
        ' *   * ',
        '*     *',
        ' *   * ',
        '  * *  ',
        '   *   ',
        ]);
    });
    }
);
