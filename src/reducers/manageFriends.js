export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      friend: {
        name: " "
        hometown: " ",
        id: ""
        return {friends: [ ]}

      }


    default:
      return state;
  }
}
