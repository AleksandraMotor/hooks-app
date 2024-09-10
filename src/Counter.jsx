import { createRef, PureComponent } from "react";

class Counter extends PureComponent {
    state = {
        counter: 0,
    }

    commonentRef = createRef();

    asyncIncreaseCounterValue = () => setTimeout(() => {
        if (this.commonentRef.current) {
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }))
        }
    }, 3000)

    render() {
        const { counter } = this.state;
        return (
            <div ref={this.commonentRef}>
                <p>Wartość licznika wynosi: {counter}</p>
                <button onClick={this.asyncIncreaseCounterValue}>Pobierz asynchroniczne dane</button>
            </div>
        )
    }
}

export default Counter;