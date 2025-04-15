// @TODO: Move to its correct place
export const State = () => {
  return {
    selectedUser: null,
    users: [],
  }
}

export const Actions = state => ({
  addUsers: users => state.users = users,
  setSelectedUser: user => state.selectedUser = user,
})
