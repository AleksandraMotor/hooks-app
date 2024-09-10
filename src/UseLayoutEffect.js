import { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
    useEffect(
        () => console.log('Po wyrenderowaniu DOM'),[]
    );
    useLayoutEffect(
        () => console.log('Przed wyrenderowaniem DOM'),[]
    );
    console.log('render');
    return (
        <div>
            <h2>useEffect() & useLayoutEffect()</h2>
        </div>
    );
};

export default UseLayoutEffect;