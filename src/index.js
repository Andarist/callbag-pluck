const ensureArray = maybeArr =>
  Array.isArray(maybeArr) ? maybeArr : [maybeArr]

export default function pluck(properties) {
  properties = ensureArray(properties)

  return source => (start, sink) => {
    if (start !== 0) return

    source(0, (type, data) => {
      sink(
        type,
        type === 1 ? properties.reduce((obj, prop) => obj[prop], data) : data,
      )
    })
  }
}
