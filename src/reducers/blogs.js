const blogs = (state = [], action) => {
  switch (action.type) {
    case "BLOGS":
      return action.blogs;
    case "ADD_BLOG":
      return [...state, action.blog]
    case "REMOVE_BLOG":
      return state.filter( blog => blog.id !== action.blog.id );
    default:
      return state;
  }
}
export default blogs;
      
  