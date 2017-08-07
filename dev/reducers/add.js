export default(state=[], payload) => {
  switch(payload){
    case 'Add_article':
    return [...state,payload.item];
    default:
    return state;
  }
};
