const Checkbox = props => (
  <label>
    <input type="checkbox" className="checkboxInput"
           name={props.name} id={props.id} value={props.value || props.label}
           required checked={props.isChecked}
           onChange={props.onChange}
    />
    <span className="checkboxContent">
      {props.icon ? <i className={props.icon}></i> : ''}
      {props.label}
    </span>
    <style jsx>{`
      .checkboxInput {
        display: none;
      }
      .checkboxContent {
        border: var(--default-border-width) solid var(--color-neutral);
        background-color: var(--color-neutral);
        padding: var(--default-padding);
        border-radius: var(--default-radius);
        color: var(--color-neutralDark);
        cursor: pointer;
        margin: var(--default-margin);
        min-width: 4rem;
      }
      .checkboxContent:hover {
        border: var(--default-border-width) solid var(--color-accentFocus);
        background-color: var(--color-accentFocus);
      }
      .checkboxInput:checked + .checkboxContent {
        border: var(--default-border-width) solid var(--color-accent);
        background-color: var(--color-accent);
        color: var(--color-light);
      }
      `}</style>
  </label>
);

export default Checkbox;
