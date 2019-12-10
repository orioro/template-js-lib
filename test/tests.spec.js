import { projectName } from '../src'

describe('tests', () => {
	test('test', () => {
		expect(projectName()).toEqual('project-name')
	})
})
