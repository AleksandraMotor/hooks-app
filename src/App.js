import { PureComponent } from 'react';
import './App.css';
import CreateRef from './CreateRef';
import UseRef from './UseRef';
import UseReducer from './UseReducer';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseLayoutEffect from './UseLayoutEffect';

class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <CreateRef/>
        <UseRef/>
        <UseReducer/>
        <UseMemo/>
        <UseCallback/>
        <UseLayoutEffect/>
      </div>
    )
  }
}

export default App;