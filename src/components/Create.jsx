import { useEffect, useState } from "react";
import "../css/Create.css";
import { useForm } from "../Hook/useForm";
import { Card } from "./Card";
import { Done } from "./Done";

const validateForm = (Form) => {
  let errors = {};
  const regExpNumber = /[A-z]/g;

  if (Form.username === "Jane Appleseed") errors.name = "Can't be blank";

  if (Form.numberCard === "0000 0000 0000 0000")
    errors.cardNumber = "Can't be blank";

  if (regExpNumber.test(Form.numberCard)) {
    errors.cardNumber = "Wrong format, numbers only";
  }

  if (Form.cardMM === "00") errors.cardMM = "Can't be blank";
  if (Form.cardYY === "00") errors.cardYY = "Can't be blank";

  if (Form.cardCVC === "123") errors.cardCVC = "Can't be blank";
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
  const { Form, onInputChangue, onSubmit, onResetForm, Error, exito, reset } =
    useForm(initialForm, validateForm);
  const { username, numberCard, cardMM, cardYY, cardCVC } = Form;

  const [classname, setclassname] = useState('input-form')

  useEffect(() => {
    if (username.length < 0) onResetForm("username");
  }, [Form]);

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
          {Object.keys(Error).length === 0 && exito ? (
            <Done reset={reset} />
          ) : (
            <form id="forma" onSubmit={onSubmit}>
              <div className="parent" >
                <label className="label-form">CARDHOLDERNAME</label>
                <input
                  className={classname}
                  id="name"
                  name="username"
                  placeholder="e.g  Jane Appleseed"
                  type="text"
                  maxLength={30}
                  onChange={(e) => onInputChangue(e)}
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
                  maxLength={16}
                  minLength={16}
                  placeholder="e.g  1234 5678 9123 0000"
                  onChange={(e) => onInputChangue(e)}
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
                      type="number"
                      placeholder="MM"
                      name="cardMM"
                      min={1}
                      max={30}
                      onChange={(e) => onInputChangue(e)}
                      autoComplete="off"
                    />
                    <p className="error">{Error.cardMM}</p>
                  </div>

                  <div className="parent">
                    <label className="label-form">(MM/YY)</label>
                    <input
                      className="input-form"
                      type="number"
                      placeholder="YY"
                      min={1}
                      max={12}
                      name={"cardYY"}
                      onChange={(e) => onInputChangue(e)}
                      autoComplete="off"
                    />
                    <p className="error">{Error.cardYY}</p>
                  </div>
                </div>
                <div className="cvc">
                  <div className="parent">
                    <label className="label-form">CVC</label>
                    <input
                      className="input-form small"
                      type="number"
                      name="cardCVC"
                      placeholder="e.g  123"
                      min={100}
                      max={999}
                      onChange={(e) => onInputChangue(e)}
                      autoComplete="off"
                    />
                    <p className="error">{Error.cardCVC}</p>
                  </div>
                </div>
              </div>

              <button className="btn-confirm" type="submit">
                Confirm 
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
