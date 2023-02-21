// get elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initial state
const InitialState = {
    value: 0
};

// Reducer
function counterReducer(state = InitialState, action){
    if(action.type === "increment"){
        return {
            ...state,
            value: state.value + 1
        }
    }
    else if(action.type === "decrement"){
        return {
            ...state,
            value: state.value - 1
        }
    }
    else{
        return state
    }
}

// store
const store = Redux.createStore(counterReducer)

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

render();

store.subscribe(render)


// add event listener
incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment"
    })
})

decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "decrement"
    })
})