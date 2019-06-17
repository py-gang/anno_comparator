const RadioButton = props => (
  <label>
    <input type="radio" className="radioInput"
           name={props.name} id={props.id} value={props.value || props.label}
           onChange={props.onChange}
           required checked={props.isChecked} />
    <span className="radioContent">
      {props.icon ? <i className={props.icon}></i> : ''}
      {props.label}
    </span>
    <style jsx>{`
      .radioInput {
        display: none;
      }
      .radioContent {
        border: var(--default-border-width) solid var(--color-neutral);
        background-color: var(--color-neutral);
        padding: var(--default-padding);
        border-radius: var(--default-radius);
        color: var(--color-neutralDark);
        cursor: pointer;
        margin: var(--default-margin);
      }
      .radioContent:hover {
        border: var(--default-border-width) solid var(--color-accentFocus);
        background-color: var(--color-accentFocus);
      }
      .radioInput:checked + .radioContent {
        border: var(--default-border-width) solid var(--color-accent);
        background-color: var(--color-accent);
        color: var(--color-light);
      }
      `}</style>
  </label>
);

export default RadioButton;
