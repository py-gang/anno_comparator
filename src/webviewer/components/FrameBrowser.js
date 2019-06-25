import Panel from "../layouts/Panel";
import FrameBackground from "./FrameBackground";
import FrameOverlay from "./FrameOverlay";
import Checkbox from "../ui-components/Checkbox";
import RadioButton from "../ui-components/RadioButton";
import RangeSlider from "../ui-components/RangeSlider";
import Button from "../ui-components/Button";
import FrameNavigator from "./FrameNavigator";
import { observer } from "mobx-react";
import PlayerState from "../stores/PlayerState";

const framesCount = 1000;

@observer
class FrameBrowser extends React.Component {
  render() {
    return (
      <Panel>
        <div className="container">
          <FrameOverlay />
          <FrameBackground />
        </div>
        <div><FrameNavigator st={PlayerState} /></div>
        <RadioButton name="playerState" value="play" icon="fas fa-play" onChange={PlayerState.setPlayState} />
        <RadioButton name="playerState" value="playFast" icon="fas fa-forward" onChange={PlayerState.setPlayState} />
        <RadioButton name="playerState" value="pause" icon="fas fa-pause" onChange={PlayerState.setPlayState} />
        <RangeSlider onChange={this.onRangeChange} st={PlayerState} maxValue={PlayerState._framesTotal} currentValue={PlayerState._currentFrame} width={"70%"} />
        <Button icon="fas fa-fast-backward" mode="inactive" />
        <Button icon="fas fa-step-backward" mode="inactive" />
        <span>1</span>
        <Button icon="fas fa-step-forward" mode="inactive" />
        <Button icon="fas fa-fast-forward" mode="inactive" />
        <div className="controls">
          {
            ['960x540', '1280x720', '1920x1080']
              .map((option, idx) => <RadioButton name="resolution" label={option} key={idx} />)
          }
          <Checkbox label="Grid" />
          <Button label="Some action" />
        </div>
        <style jsx>{`
          .container {
            position: relative;
            min-width: 1000px;
            min-height: 600px;
            display: block;
          }
          .controls {
            width: 100%;
            margin: var(--default-margin);
          }
       `}</style>
      </Panel>
    );
  }

  onPlayModeChange(e) {
    /* let intervalHandler;
    if (e.target.checked) {
      intervalHandler = setInterval(this.frameAdvance, 100);
    } else {
      clearInterval(intervalHandler);
    } */
  }

  frameAdvance() {
  }

  onRangeChange(e) {
    console.log(e.target.value);
    PlayerState.setCurrentFrame(e.target.value - 1);
  }
}

export default FrameBrowser;
