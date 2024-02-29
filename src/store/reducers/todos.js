const initialState = {
    alltodos:["hi","roshi","hello","geyash"]
} 
const todoReducer = function(state=initialState,action){
    if(action.type==="ADDTODO"){
    return{...state,alltodos:[...state.alltodos,action.payload]}
  }
 return state
}
export default todoReducer;