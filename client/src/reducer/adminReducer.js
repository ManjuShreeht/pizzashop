export const AddPizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'ADD_PIZZA_SUCCESS':return {
            loading:false,
            success:action.payload
           
        }
        case  'ADD_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const editPizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'EDIT_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'EDIT_PIZZA_SUCCESS':return {
            loading:false,
            success:action.payload
           
        }
        case  'EDIT_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}


export const getIdPizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'GETID_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GETID_PIZZA_SUCCESS':return {
            loading:false,
            success:action.payload,
            singleItem:action.payload
           
        }
        case   'GETID_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}


export const deletePizzasReducer=(state={},action)=>{
    switch(action.type){
        case 'DELETE_PIZZA_REQUEST':return{
            loading:true,
            ...state
        }
        case  'DELETE_PIZZA_SUCCESS':return {
            loading:false,
            success:action.payload
           
        }
        case  'DELETE_PIZZA_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const getUserReducer=(state={AllUser:[]},action)=>{
    switch(action.type){
        case 'GET_USER_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GET_USER_SUCCESS':return {
            loading:false,
            AllUser:action.payload,
            success:action.payload
           
        }
        case  'GET_USER_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}

export const getAllOrdersReducer=(state={AllOrders:[]},action)=>{
    switch(action.type){
        case 'GET_ORDER_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GET_ORDER_SUCCESS':return {
            loading:false,
            AllOrders:action.payload,
            success:action.payload
           
        }
        case  'GET_ORDER_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}


export const deliverReducer=(state={},action)=>{
    switch(action.type){
        case 'GET_DELIVER_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GET_DELIVER_SUCCESS':return {
            loading:false,
            success:action.payload
           
        }
        case  'GET_DELIVER_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}