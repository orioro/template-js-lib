import { projectName } from './index'

describe('tests', () => {
  test('test-1', () => {
    expect(projectName('parameter')).toEqual('output "parameter"')
  })
})
