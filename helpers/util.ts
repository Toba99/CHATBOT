import { ReactElement } from 'react'

type ViewMap = {
  [type: string]: ReactElement
}

export const createViewSelector = (type: string) => (
  views: ViewMap = {},
  defaultView: ReactElement,
): ReactElement => {
  if (type in views) {
    return views[type]
  } else {
    return defaultView
  }
}

export const insertToArray = <T extends any>(
  source: T[],
  index: number,
  callback: (prev: T) => T,
): T[] => {
  return [
    ...source.slice(0, index),
    callback(source[index]),
    ...source.slice(index + 1),
  ]
}
