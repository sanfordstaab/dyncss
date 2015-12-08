describe('dyncss:setStyleSheet', function() {
    var setStyleSheet = require('dyncss');

    it('DOM must be present', function() {
        expect(document.head).toBeDefined();
    });
    it('No stylesheet exists', function() {
        expect(document.getElementById('testStyleSheet')).toBe(null);
    });
    var testCSS = '.foo { background:blue; }';
    setStyleSheet('test', testCSS);
    it('First Call to setStyleSheet with "test" should create the "testStyleSheet" style sheet.', function() {
        expect(document.getElementById('testStyleSheet')).toBeDefined();
    });
    it('CSS in style sheet is set properly" style sheet.', function() {
        expect(document.getElementById('testStyleSheet').innerHTML).toBe(testCSS);
    });
    var testCSS2 = '.bar { color: black; }'
    setStyleSheet('test', testCSS2);
    it ('Second call to setStyleSheet with new CSS should have new CSS value', function() {
        expect(document.getElementById('testStyleSheet').innerHTML).toBe(testCSS2);
    });
});
