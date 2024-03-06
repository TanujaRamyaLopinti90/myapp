const initialState={
    students:[
        {
          firstname:'roshika',
          lastname:'nina', 
          gender:'female' 
        },
        {
            firstname:'geyash',
            lastname:'vihan', 
            gender:'male' 
          },
          {
            firstname:'tanuja',
            lastname:'ramya', 
            gender:'female' 
          }
    ]
}
function studentReducer(state=initialState){
    return state
}
export default studentReducer;