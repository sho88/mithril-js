// @TODO: Move to its correct place
export const State = () => {
  return {
    counter: 0,
    name: "John Doe",
    selectedUser: null,
    users: [],
  }
}

export const Actions = state => ({

  // for users...
  addUsers: users => state.users = users,
  setSelectedUser: user => state.selectedUser = user,

  // for home page...
  changeName: name => state.name = name,
  incrementCounter: () => state.counter = state.counter + 1,
})
