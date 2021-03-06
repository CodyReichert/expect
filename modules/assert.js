import inspect from 'object-inspect'

function assert(condition, messageFormat, ...extraArgs) {
  if (condition)
    return

  let index = 0

  throw new Error(
    messageFormat.replace(/%s/g, () => inspect(extraArgs[index++]))
  )
}

export default assert
