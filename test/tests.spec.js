const templateBrowserJsLib = require('../src')

describe('tests', () => {
	test('test', () => {
		expect(templateBrowserJsLib()).toEqual('template-browser-js-lib')
	})
})
