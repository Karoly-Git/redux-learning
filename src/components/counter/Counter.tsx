import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../state/store";
import { decrement, increment, incrementByAmount, reset } from "../../state/counter/counterSlice";
import "./Counter.css";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="component counter">
            <h2>{count}</h2>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            <button onClick={() => dispatch(incrementByAmount(-10))}>-10</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
