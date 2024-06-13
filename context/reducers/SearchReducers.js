export function SearchReducers(state = "", action){
            switch(action.type){
                case "SEARCH_INPUT":
                return{
                    ...state,
                    Searchinput :action.payload
                }
                default:
                return state
            }
            
}
