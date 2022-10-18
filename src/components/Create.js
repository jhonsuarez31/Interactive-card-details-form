import { useEffect } from "react";
import "../css/Create.css";
import { useForm } from "../Hook/useForm";
import { Card } from "./Card";

export const Create = () => {
  const { Form, onInputChangue } = useForm({
    username: "Jane Appleseed ",
    numberCard: "0000 0000 0000 0000",
    cardMM: "00",
    cardYY: "00",
    cardCVC: "123",
  });
  let { username, numberCard, cardMM, cardYY, cardCVC } = Form;
  

  if(username.length < 1){
    username='Jane Appleseed'
  }

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
          <form id="forma">
            <div className="parent">
              <label className="label-form">CARDHOLDERNAME</label>
              <input
                className="input-form"
                id="name"
                name="username"
                type="text"
                placeholder="e.g  Jane Appleseed"
                maxLength={30}
                onChange={onInputChangue}
              ></input>
            </div>
            <div className="parent">
              <label className="label-form">CARD NUMBER</label>
              <input
                className="input-form"
                type="text"
                name="numberCard"
                placeholder="e.g  1234 5678 9123 0000"
                maxLength={16}
                minLength={16}
                onChange={onInputChangue}
    
              ></input>
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
                    onChange={onInputChangue}
                  ></input>
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
                    onChange={onInputChangue}
                  ></input>
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

                    onChange={onInputChangue}
                  ></input>
                </div>
              </div>
            </div>
            <button
              className="btn-confirm"
              type="submit"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
