import test from 'ava'
import { pull } from './util'


test('index', t => {
  const list = [1, 2, 3]
  pull(list, 2)

  t.deepEqual(list, [1, 3])
})