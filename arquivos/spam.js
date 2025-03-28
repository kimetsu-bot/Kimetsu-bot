const usedCommandRecently = new Set()

const isFilteredx = (sender) => !!usedCommandRecently.has(sender)
const addFilterx = (sender) => {
usedCommandRecently.add(sender)
setTimeout(() => usedCommandRecently.delete(sender), 6000) }

module.exports = {isFiltered, addFilter}
