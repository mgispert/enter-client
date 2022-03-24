import React from "react";
import "./PhoneDetails.css";

export default function PhoneDetails({ details }) {
  console.log(details.imageFileName);
  return (
    <div className="details">
      <img src={`/images/${details.imageFileName}`} alt="imagedetail" />
      <div className="detailsInfo">
        <p>
          Description of the product:
          <br />
          <i>"{details.description}"</i>
        </p>
        <ul>
          <li>
            Color: <i>{details.color}</i>
          </li>
          <li>
            Price: <i>{details.price}</i>
          </li>
          <li>
            Screen: <i>{details.screen}</i>
          </li>
          <li>
            Processor: <i>{details.processor}</i>
          </li>
          <li>
            RAM: <i>{details.ram}</i>
          </li>
        </ul>
      </div>
    </div>
  );
}
