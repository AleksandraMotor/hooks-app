import { createRef, PureComponent } from "react";
import Counter from './Counter';

// createRef is a function
// It returns a read-only ref object.
// used in class components
class CreateRef extends PureComponent {
    state = {
        isCounterVisible: true
    }

    textInput = createRef();
    focusTextInput = () => this.textInput.current.focus();

    paragrafElement = createRef();
    addChar = () => this.paragrafElement.current.textContent += '!';

    toggleVivsibilityCounter = () => this.setState(prevState => ({isCounterVisible: !prevState.isCounterVisible}))

    render() {
        const counterElement = this.state.isCounterVisible ? <Counter/> : null;
      return (
        <div>
            <h2>createRef()</h2>
            <p>createRef is a function. It returns a read-only ref object and used in class components</p>
            <input type='text' ref={this.textInput}/>
            <input type='number'/>
            <button onClick={this.focusTextInput}>Ustaw focus na input</button>
            <hr/>
            <p ref={this.paragrafElement}>Hello</p>
            <button onClick={this.addChar}>Dodaj !</button>
            <hr/>
            <button onClick={this.toggleVivsibilityCounter}>pokaz/ukryj</button>
            {counterElement}
        </div>
      )
    }
}

export default CreateRef;