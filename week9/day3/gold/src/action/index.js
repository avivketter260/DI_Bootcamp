export const sendForm = (obj)=>{
    return{
        type: 'SEND_INPUT',
        obj: obj
    
}
}


export const sendToEdit = (allData)=>{
return{
    type: 'EDIT',
    editObj: allData
}
}

export const resetEdit = ()=>{
    return{
        type: 'RESET'
    }
    }