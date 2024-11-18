import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
    <div className="App">
    <MarkSheet name="Sister" engMarks="70" telMarks="71" hindiMarks="72" mathsMarks="23" sciMarks="74" socMarks="75" ></MarkSheet>
    <MarkSheet name="Brother" engMarks="80" telMarks="81" hindiMarks="82" mathsMarks="83" sciMarks="84" socMarks="85"></MarkSheet>
    <MarkSheet name="My" engMarks="9" telMarks="19" hindiMarks="29" mathsMarks="39" sciMarks="49" socMarks="59"></MarkSheet>
   
    </div>
  );
}

export default App;
