const blogs = (state = [], action) => {
  switch (action.type) {
    case "BLOGS":
      return action.blogs;
    case "ADD_BLOG":
      return [...state, action.blog]
    default:
      return state;
  }
}
export default blogs;
      
  