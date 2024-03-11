export function addtodo(task){
    return{type:'ADDTASK',payload:task}
}

export function deletetodo(index){  
  return{type:'DELETETASK',payload:index}
}

export function getcountries(){
      return(dispatch)=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(countries=>{dispatch({type:'UPDATECOUNTRIES',payload:countries})})
      }  
}