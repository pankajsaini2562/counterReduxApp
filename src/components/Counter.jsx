import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "../store/counterSlice";
export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
