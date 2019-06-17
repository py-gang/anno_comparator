const FrameOverlay = () => (
  <div className="container">
    Overlay
    <style jsx>{`
      .container {
        position: absolute;
        min-width: 800px;
        min-height: 600px;
        z-index: 10;
      }
      `}</style>
  </div>
);

export default FrameOverlay;
