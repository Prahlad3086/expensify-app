import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {})=> ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {})=> ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {})=> ({
    type: 'SET',
    count
});

const resetCount = ()=> ({
    type: 'RESET'
});

const countReducer = (state = { count : 0 }, action)=>{
    switch( action.type ){
        case 'INCREMENT': 
           return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{  // It will run every time as state changes...
    console.log(store.getState());
});

// I'd like to increment the count
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

// I'd like to reset the count
store.dispatch(resetCount());

// I'd like to decrement the count
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 100 }));