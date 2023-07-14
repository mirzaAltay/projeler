import Form from "./components/form";
import Comment from "./components/comment";
import Confirm from "./components/confirm";
import './style/main.scss';
import { useState } from "react";
function App() {

  const [formData, setFormData] = useState({
    nameSurname: "",
    mail: "",
    message: "",
    id: "",
  })
  const [confirmArray, setConfirmArray] = useState([]);
  const [formArray, setFormArray] = useState([])

  return (
    <div className="App">
      <div className="App__left">
        <Form formData={formData} setFormData={setFormData} formArray={formArray} setFormArray={setFormArray} />
        <Comment confirmArray={confirmArray} setFormArray={setFormArray} />
      </div>
      <div className="App__right">
        <Confirm formArray={formArray} setFormArray={setFormArray} confirmArray={confirmArray} setConfirmArray={setConfirmArray} />
      </div>
    </div>
  );
}

export default App;
