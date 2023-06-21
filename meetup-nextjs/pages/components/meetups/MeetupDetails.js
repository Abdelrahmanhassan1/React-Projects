import React from "react";
import Styles from "./MeetupDetails.module.css";

export default function MeetupDetails(props) {
  return (
    <section className={Styles.detail}>
      <img src={props.imageSrc} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
