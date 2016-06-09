let nextTodoId = 0
export const addContact = (text) => {
  return {
    type: 'ADD_CONTACT',
    id: nextTodoId++,
    text
  }
}
