import { observable, computed, autorun } from "mobx";

class ObservablePlayerState {
  @observable _play = false;
  @observable _currentFrame = 0;
  @observable _framesTotal = 100;
  _intervalHandler = null;
  _delay = 50;

  constructor() {
    if (this._play) {
      this.startPlaying();
    }
    autorun(() => console.log(this.report));
  }

  @computed get report() {
    return `Is playing: ${this._play} ` +
      `${this._currentFrame} of ${this._framesTotal}`;
  }

  switchPlayState = () => {
    this._play = !this._play;
    if (this._play) {
      this.startPlaying();
    } else {
      this.stopPlaying();
    }
  };

  setPlayState = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case 'play':
        this._delay = 50;
      case 'playFast':
        if (e.target.value === 'playFast') this._delay = 25;
        if (this._play) this.stopPlaying();
        this._play = true;
        this.startPlaying();
        break;
      case 'pause':
        this._play = false;
        this.stopPlaying();
    }
  };

  startPlaying = () => {
    this._intervalHandler = setInterval(this.advanceFrame, this._delay);
    console.log("intervalHandler on start", this._intervalHandler);
  };

  advanceFrame = (step = 1) => {
    if (this._currentFrame + 1 >= this._framesTotal) {
      this._currentFrame = 0;
    } else {
      this._currentFrame++;
    }
  };

  stopPlaying = () => {
    if (this._intervalHandler) clearInterval(this._intervalHandler);
    this._intervalHandler = null;
    console.log("intervalHandler on stop", this._intervalHandler);
  };

  setCurrentFrame = (value) => {
    this._currentFrame = value;
  }
}

const observablePlayerState = new ObservablePlayerState();

export default observablePlayerState;
