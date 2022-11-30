import { useEffect } from "react";
import "../css/Create.css";
import { useForm } from "../Hook/useForm";
import { Card } from "./Card";

const validateForm = (Form) => {
  let errors = {};
  const  regExpNumber = /[A-z]/g;

  Form.username === "Jane Appleseed"
  ? (errors.name = "Can't be blank")
  : (errors.name = "");

  if (regExpNumber.test(Form.numberCard)) {
    errors.cardNumber = "Wrong format, numbers only";
  } else{
    Form.numberCard.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim()
  }

  Form.cardMM === "00"
  ? (errors.cardMM = "Can't be blank")
  : (errors.cardMM = "");


  return errors;
};

const initialForm = {
  username: "Jane Appleseed",
  numberCard: "0000 0000 0000 0000",
  cardMM: "00",
  cardYY: "00",
  cardCVC: "123",
};

export const Create = () => {
  const { Form, onInputChangue, onSubmit, onResetForm, Error, onBlur } =
    useForm(initialForm, validateForm);

  const { username, numberCard, cardMM, cardYY, cardCVC } = Form;

  useEffect(() => {
    if (username.length < 1) onResetForm("username");
  }, [username]);

  useEffect(() => {
    if (numberCard.length < 1) onResetForm("numberCard");
  }, [numberCard]);

  useEffect(() => {
    if (cardMM.length < 1) onResetForm("cardMM");
  }, [cardMM]);

  useEffect(() => {
    if (cardYY.length < 1) onResetForm("cardYY");
  }, [cardYY]);

  useEffect(() => {
    if (cardCVC.length < 1) onResetForm("cardCVC");
  }, [cardCVC]);

  return (
    <>
      <Card
        username={username}
        cardNumber={numberCard}
        cardDD={cardMM}
        cardMM={cardYY}
        cardCVC={cardCVC}
      />
      <div className="container">
        <div className="form-container">
          <form id="forma" onSubmit={onSubmit}>
            <div className="parent">
              <label className="label-form">CARDHOLDERNAME</label>
              <input
                className="input-form"
                id="name"
                name="username"
                placeholder="e.g  Jane Appleseed"
                type="text"
                maxLength={30}
                onChange={(e) => onInputChangue(e)}
                onBlur={(e) => onBlur(e)}
                autoComplete="off"
              />
              <p className="error">{Error.name}</p>
            </div>
            <div className="parent">
              <label className="label-form">CARD NUMBER</label>
              <input
                className="input-form"
                type="text"
                id="numberCard"
                name="numberCard"
                placeholder="e.g  1234 5678 9123 0000"
                maxLength={16}
                minLength={16}
                onChange={(e) => onInputChangue(e)}
                onBlur={(e) => onBlur(e)}
                autoComplete="off"
              />
              <p className="error">{Error.cardNumber}</p>
            </div>

            <div className="content-dos">
              <div className="date">
                <div className="parent">
                  <label className="label-form">EXP. DATE</label>
                  <input
                    className="input-form"
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                    minLength={1}
                    name="cardMM"
                    onChange={(e) => onInputChangue(e)}
                    onBlur={(e) => onBlur(e)}
                    autoComplete="off"
                  />
                </div>
                <div className="parent">
                  <label className="label-form">(MM/YY)</label>
                  <input
                    className="input-form"
                    type="text"
                    placeholder="YY"
                    maxLength={2}
                    minLength={1}
                    name={"cardYY"}
                    onChange={(e) => onInputChangue(e)}
                    autoComplete="off"
                  />
                  
                </div>
              </div>
              
              <div className="cvc">
                <div className="parent">
                  <label className="label-form">CVC</label>
                  <input
                    className="input-form small"
                    type="text"
                    name="cardCVC"
                    placeholder="e.g  123"
                    maxLength={3}
                    minLength={3}
                    onChange={(e) => onInputChangue(e)}
                    autoComplete="off"
                  ></input>
                </div>
              </div>
            </div>

            <button className="btn-confirm" type="submit">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
