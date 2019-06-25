import RangeSlider from "../ui-components/RangeSlider";
import PlayerState from "../stores/PlayerState";

class FrameNavigator extends React.Component {
  render() {
    console.log("FrameNavigator", this.props);
    return (
      <React.Fragment>
        <div>Frame Navigator</div>
        <RangeSlider onChange={this.onRangeChange} maxValue={this.props.st._framesTotal} currentValue={this.props.st._currentFrame} width={"70%"} />
      </React.Fragment>
    );
  }

  onRangeChange(e) {
    console.log(e.target.value);
    PlayerState.setCurrentFrame(e.target.value - 1);
  }
}

export default FrameNavigator;
