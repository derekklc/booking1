import parse from "html-react-parser"
import xss, { escapeAttrValue } from "xss"

const whitelistAttributes = ["rel"]

const htmlCleaner = (dirtyHtml) => {
  return xss(dirtyHtml, {
    onIgnoreTagAttr: (_tag, name, value) => {
      if (whitelistAttributes.includes(name)) {
        // escape its value using built-in escapeAttrValue function
        return `${name}="${escapeAttrValue(value)}"`
      }
      return undefined
    },
  })
}

export const htmlRenderer = (dirtyHtml) => {
  if (!dirtyHtml) {
    return null
  }
  const sanitized = decodeURI(encodeURI(htmlCleaner(dirtyHtml)))
  // Not working properly
  return parse(sanitized)
}

export const makeId = (length) => {
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export const makeTable = (tableObject) => {
  return (
    <table>
      {tableObject?.map((row, index) => {
        return (
          <tr key={`table-row-${index}`}>
            {row?.map((cell, index) => {
              return <td key={`table-cell-${index}`}>{cell.text}</td>
            })}
          </tr>
        )
      })}
    </table>
  )
}
