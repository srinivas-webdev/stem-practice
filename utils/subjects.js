const subMap = new Map([
  ['maths', 'Maths'],
  ['physics', 'Physics'],
  ['english', 'English'],
  ['science', 'Science'],
  ['psc', 'Physical Science']
])

export const getSubDescFromSubCode = (code) => {
  return subMap.get(code) ?? 'Maths';
}