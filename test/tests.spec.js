const projectName = require('../src')

describe('tests', () => {
	test('test', () => {
		expect(projectName()).toEqual('project-name')
	})
})
