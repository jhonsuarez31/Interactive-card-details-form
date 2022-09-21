import React from "react";
import "../css/Create.css";

export const Create = () => {
  const number =11;
  
  return (
    
    <div className="container">
      <div className="form-container">
        <form>
        <div className="parent">
          <label className="label-form" >CARDHOLDERNAME</label>
          <input className="input-form" type="text" placeholder="e.g  Jane Appleseed"></input>
          </div>
          <div className="parent">
          <label className="label-form">CARD NUMBER</label>
          <input className="input-form" type="text" placeholder="e.g  1234 5678 9123 0000"></input>
          </div>
          <div className="content-dos">
            <div className="date">
            <div className="parent">
          <label className="label-form">EXP. DATE</label>
          <input className="input-form"  type="text" placeholder="MM"></input>
            </div>
            <div className="parent" >
          <label className="label-form">(MM/YY)</label>
          <input className="input-form"  type="text" placeholder="YY"></input>
            </div>
          </div>
          <div className="cvc">
          <div className="parent">
          <label className="label-form">CVC</label>
          <input className="input-form small"  type="text" placeholder="e.g  123"></input>
          </div>
          </div>
          </div>
          <button className="btn-confirm" type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};
