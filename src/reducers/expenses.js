//Expenses Reducer 

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState , action)=> {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=> expense.id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,    // Gives all the data in expense objects
                        ...action.updates   // Updating the existing ones
                    }
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

export default expensesReducer;