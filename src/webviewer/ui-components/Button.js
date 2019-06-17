import {Fragment} from "react";

const Button = props => (
  <Fragment>
    <button type="button" className={`button ${props.mode}`}
            name={props.name} id={props.id} value={props.value || props.label}>
      {props.icon ? <i className={props.icon}></i> : ''}
      {props.label}
    </button>
    <style jsx>{`
      .button {
        border: var(--default-border-width) solid var(--color-accent);
        background-color: var(--color-accent);
        padding: var(--default-padding);;
        border-radius: var(--default-radius);
        color: var(--color-light);
        margin: 0 var(--default-margin);
        font-size: 0.9rem;
      }
      .inactive {
        background-color: var(--color-neutral);
        color: var(--color-dark);
      }
      .button:hover {
        border: var(--default-border-width) solid var(--color-accentFocus);
        background-color: var(--color-accentFocus);
      }
    `}</style>
  </Fragment>
);

export default Button;
