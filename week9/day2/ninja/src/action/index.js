export const AddTask = (todo)=>{
return{
    type:'TASK',
    theTask: todo
}
}


export const active = ()=>{
    return{
        type:'ACTIVE',
     
    }
}

export const all = ()=>{
    return{
        type:'ALL',
        
    }
}