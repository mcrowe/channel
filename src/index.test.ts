import test from 'ava'
import Channel from './'


test('subscribe/publish', t => {
  const channel = new Channel()

  let calls = 0

  channel.subscribe(() => {
    calls += 1
  })

  channel.publish({})

  t.is(calls, 1)
})