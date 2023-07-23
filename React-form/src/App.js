import "./css/main.css";
import React from "react";
import { useState } from "react";
import {Switch,Link,Route} from 'react-router-dom'
import Bilgiler from './bilgiler'

function App() {

  const [form,setForm]=useState({isim:"",sehir:"",dogum:"",renk:"",adres:""});

  const handleChange=(event)=>{

    setForm({...form,[event.target.name]:event.target.value})
  }

  return (
    <div className="App">
      <form>
        <input type="text" name="isim" value={form.isim}  onChange={handleChange} placeholder="isminizi giriniz" />
        <select name="sehir" value={form.sehir} onChange={handleChange}>
          <option value="">Şehir seciniz</option>
          <option value="İstanbul">İstanbul</option>
          <option value="Adana">Adana</option>
          <option value="Ankara">Ankara</option>
        </select>
        <input type="date" name="dogum" value={form.dogum} onChange={handleChange}/>
        <input type="color" name="renk" value={form.renk} onChange={handleChange}/>
        <textarea cols="20" rows={5} name="adres" value={form.adres} onChange={handleChange} placeholder="dresinizi giriniz"></textarea>
        <button>Gönder</button>
        <link></link>
      </form>
    </div>
  );
}

export default App;
