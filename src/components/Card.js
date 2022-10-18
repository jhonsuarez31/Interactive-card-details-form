import "../css/Card.css";

import bg_card_front from "../image/bg-card-front.png";
import bg_card_back from "../image/bg-card-back.png";
import card_logo from "../image/card-logo.svg";

export const Card = ({ username, cardNumber, cardDD, cardMM, cardCVC }) => {
  return (
    <div className="image-conatiner" >
      <div className="image">
        <div className="card_conatiner">
          <div className="card_front">
            <img src={bg_card_front} alt="" />
            <img className="card_logo" src={card_logo} alt="" />
            <h2 className="card_number">{cardNumber}</h2>
            <div className="card_front_footer">
              <h4 className="card_name_">{username}</h4>
              <h4>
                {cardDD}/{cardMM}
              </h4>
            </div>
          </div>
        </div>
        <img className="card_back" src={bg_card_back} alt="" />
        <h4 className="card_cvc_">{cardCVC}</h4>
      </div>
    </div>
  );
};
