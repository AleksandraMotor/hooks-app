import { useRef } from "react";

// useRef is a hook
// It returns a mutable ref object
// used in functional components
const UseRef = () => {

    const textInputRef = useRef();

    const focusOnInput = () => textInputRef.current.focus();

    return (
        <div>
            <h2>useRef()</h2>
            <p>useRef returns a mutable ref object and is used in functional components</p>
            <input ref={textInputRef} type="text"/>
            <button onClick={focusOnInput}>Ustaw focus na input</button>
        </div>
    )
}

export default UseRef;