export const SEARCH_INPUT = (value) =>{
    return{
        type:"SEARCH_INPUT",
        payload:value,
    }
};

export const SEARCH_INPUT_NULL = () =>{
    return{
        type:"SEARCH_INPUT_NULL",
        payload:null
    }
}