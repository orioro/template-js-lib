import { projectName } from './'
import * as PUBLIC_API from './'

test('public api', () => {
  expect(Object.keys(PUBLIC_API)).toMatchSnapshot()
})

describe('tests', () => {
  test('test-1', () => {
    expect(projectName('parameter')).toEqual('output "parameter"')
  })
})
