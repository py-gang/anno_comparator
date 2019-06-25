const RangeSlider = props => (
  <span className="rangeContainer">
    <input
      className="rangeSlider"
      type="range"
      min="1"
      max={props.maxValue}
      step="1"
      style={{width: (props.width || "100%")}}
      // value="300"
      defaultValue={props.currentValue}
      onChange={props.onChange}
    />
    <style jsx>{`
      .rangeContainer {
        width: 80%;
      }
      .rangeSlider {
        -webkit-appearance: none;
        width: 80%;
        height: 1rem;
        background-color: var(--color-neutral);
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
      }
      .rangeSlider:hover {
        opacity: 1;
      }
      .rangeSlider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 1px;
        height: 1.2rem;
        background-color: var(--color-dark);
        cursor: pointer;
      }
      .rangeSlider::-moz-range-thumb {
        width: 1px;
        height: 1.2rem;
        background-color: var(--color-dark);
        cursor: pointer;
      }
      `}</style>
  </span>
);

export default RangeSlider;
