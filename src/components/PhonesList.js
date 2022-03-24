import React, { useState } from "react";
import "./PhonesList.css";
import PhoneDetails from "./PhoneDetails";

export default function PhonesList(props) {
  const [phoneSelected, setPhoneSelected] = useState(null);

  return (
    <div>
      {phoneSelected ? (
        <PhoneDetails details={phoneSelected} />
      ) : (
        <section className="phonesList">
          <h1>All your phones here!</h1>
          <div className="cardsGrid">
            {props.list.map((phone) => (
              <div key={phone.id} className="card">
                <img src={`/images/${phone.imageFileName}`} alt="phoneimg" />
                <h3>{phone.name}</h3>
                <h4>{phone.manufacturer}</h4>
                <button onClick={() => setPhoneSelected(phone)}>
                  Want to see more?
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
