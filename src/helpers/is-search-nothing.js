export const isSearchNothing = (searchTerm, tasks) => tasks.every(({title}) => !title.includes(searchTerm));
