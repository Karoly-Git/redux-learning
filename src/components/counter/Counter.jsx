import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    reset,
    incrementAsync,
} from "../../state/counter/counterSlice";
import "./Counter.css";

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="component counter">
            <h2>{count}</h2>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(incrementAsync(10))}>+10 Async</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            <button onClick={() => dispatch(incrementByAmount(-10))}>-10</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}
