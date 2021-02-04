import { projectName } from './index'

describe('tests', () => {
  test('test', () => {
    expect(projectName('parameter')).toEqual('output "parameter"')
  })
})
