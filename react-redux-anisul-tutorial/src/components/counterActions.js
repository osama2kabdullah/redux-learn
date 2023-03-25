import { DECREMENT, INCREMENT, RESET } from "./counterConstance";

function incrementCounter() {
    return {
        type: INCREMENT
    }
}
function decrementCounter() {
    return {
        type: DECREMENT
    }
}
function resetCounter() {
    return {
        type: RESET
    }
}

//

export {incrementCounter, decrementCounter, resetCounter};