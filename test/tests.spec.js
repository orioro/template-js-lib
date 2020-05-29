import { projectName } from '../src'

describe('tests', () => {
	test('test', () => {
		expect(projectName('parameter')).toEqual('output "parameter"')
	})
})
