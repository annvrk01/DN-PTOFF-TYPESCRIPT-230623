import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

interface UsersProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title }: { title: string }) {
  return (
    <>
      <button>{title}</button>
    </>
  )
}

function Users({ title, disabled }: UsersProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

interface State {
  count: number
};

type Status = "idle" | "loading" | "success" | "error";

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [name, setName] = useState<string>("Nguyen Van A");
  const [status, setStatus] = useState<Status>("idle");
  const [value, setValue] = useState("Change me");

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event)=>{
    setValue(event.currentTarget.value);
  },[setValue]);

  useEffect(() => {
    console.log("1")
  },);

  useEffect(() => {
    setStatus("loading")
    console.log("2")
  }, []);

  useEffect(() => {
    setStatus("loading")
    console.log("3")
  }, [name]);

  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div className="App">
      <div>
        <p>Count: {state.count}</p>
        <button onClick={addFive}>Add 5</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <MyButton title='login' />
        <Users title="I'm a disabled button" disabled={true} />
      </div>
      {name}
      <input value={value} onChange={handleChange}/>
      <p>{value}</p>
    </div>
  );
}

export default App;
