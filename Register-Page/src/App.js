import Form from './components/form';
import Compare from './components/compare';
import './css/main.css';
import { useState } from 'react';



function App() {
  const [check, setCheck] = useState({
    inf1: false,
    inf2: false,
    inf3: false
  });
  return (
    <div className="App">
      <Form setCheck={setCheck} />
      <Compare check={check} />
    </div>
  );
}

export default App;
