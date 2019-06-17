class FrameBackground extends React.Component {
  render() {
    return (
      <div className="container">
        <canvas width={1000} height={600} ref="canvas"/>
        <style jsx>{`
          .container {
          min-width: 1000px;
          min-height: 600px;
        }
        `}</style>
      </div>
    );
  }

  componentDidMount() {
    const params = {
      width: 960,
      height: 540,
      fillStyle: makeGreyColor(224),
      strokeStyle: {
        5: makeGreyColor(216),
        10: makeGreyColor(208),
        50: makeGreyColor(200),
      },
    };

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = params.fillStyle;
    ctx.fillRect(0,0,params.width, params.height);
    Object.entries(params.strokeStyle).forEach(([freq, strokeStyle]) => {
      const steps = 100 / freq;
      const dx = params.width / steps;
      const dy = params.height / steps;
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 1; i < steps; i++) {
        ctx.moveTo(i * dx, 0);
        ctx.lineTo(i * dx, params.height);
        ctx.moveTo(0, i * dy);
        ctx.lineTo(params.width, i * dy);
      }
      ctx.stroke();
    });
  }
}


const makeGreyColor = colorComponentValue => `rgba(${colorComponentValue},${colorComponentValue},${colorComponentValue},1)`;

export default FrameBackground;
