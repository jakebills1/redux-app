const idGen = (state = 0, action) => {
  switch (action.type) {
    case "NEW_ID":
      return state + 1;
    default:
      return state;
  }
}
export default idGen;