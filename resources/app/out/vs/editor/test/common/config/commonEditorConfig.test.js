/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
define(["require", "exports", 'assert', 'vs/editor/test/common/mocks/mockConfiguration'], function (require, exports, assert, mockConfiguration_1) {
    suite('Editor Config - CommonEditorConfig', function () {
        test('Configuration.normalizeIndentation', function () {
            var config = new mockConfiguration_1.MockConfiguration({
                insertSpaces: false,
                tabSize: 4
            });
            assert.equal(config.normalizeIndentation('\t'), '\t');
            assert.equal(config.normalizeIndentation('    '), '\t');
            assert.equal(config.normalizeIndentation('   '), '   ');
            assert.equal(config.normalizeIndentation('  '), '  ');
            assert.equal(config.normalizeIndentation(' '), ' ');
            assert.equal(config.normalizeIndentation(''), '');
            assert.equal(config.normalizeIndentation(' \t   '), '\t\t');
            assert.equal(config.normalizeIndentation(' \t  '), '\t   ');
            assert.equal(config.normalizeIndentation(' \t '), '\t  ');
            assert.equal(config.normalizeIndentation(' \t'), '\t ');
            assert.equal(config.normalizeIndentation('\ta'), '\ta');
            assert.equal(config.normalizeIndentation('    a'), '\ta');
            assert.equal(config.normalizeIndentation('   a'), '   a');
            assert.equal(config.normalizeIndentation('  a'), '  a');
            assert.equal(config.normalizeIndentation(' a'), ' a');
            assert.equal(config.normalizeIndentation('a'), 'a');
            assert.equal(config.normalizeIndentation(' \t   a'), '\t\ta');
            assert.equal(config.normalizeIndentation(' \t  a'), '\t   a');
            assert.equal(config.normalizeIndentation(' \t a'), '\t  a');
            assert.equal(config.normalizeIndentation(' \ta'), '\t a');
            config = new mockConfiguration_1.MockConfiguration({
                insertSpaces: true,
                tabSize: 4
            });
            assert.equal(config.normalizeIndentation('\ta'), '    a');
            assert.equal(config.normalizeIndentation('    a'), '    a');
            assert.equal(config.normalizeIndentation('   a'), '   a');
            assert.equal(config.normalizeIndentation('  a'), '  a');
            assert.equal(config.normalizeIndentation(' a'), ' a');
            assert.equal(config.normalizeIndentation('a'), 'a');
            assert.equal(config.normalizeIndentation(' \t   a'), '        a');
            assert.equal(config.normalizeIndentation(' \t  a'), '       a');
            assert.equal(config.normalizeIndentation(' \t a'), '      a');
            assert.equal(config.normalizeIndentation(' \ta'), '     a');
        });
    });
});
//# sourceMappingURL=commonEditorConfig.test.js.map