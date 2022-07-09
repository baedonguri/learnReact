import React, {useState, useReducer} from "react";
/*
    컴포넌트에서 동적인 값을 상태(state)라고 부른다.
    useState를 사용하면 컴포넌트에서 상태를 관리할 수 있음.
*/

// const [state, dispatch] = useReducer(reducer, initialState);
// state는 앞으로 컴포넌트에서 사용할 수 있는 상태를 가리킴
// dispatch는 액션을 발생시키는 함수 

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state && state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number,dispatch] = useReducer(reducer,0);

    const onIncrease = () => {
        dispatch({type : 'INCREMENT'});
    }

    const onDecrease = () => {
        dispatch({type : 'DECREMENT'});
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}


export default Counter;