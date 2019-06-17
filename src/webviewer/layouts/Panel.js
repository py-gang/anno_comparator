const Panel = props => (
  <div className="uiPanel">
    {props.title ? <div className="uiPanelTitle">{props.title}</div> : ''}
    <div className="uiPanelBody">
      {props.children}
    </div>
    <style jsx>{`
      .uiPanel {
        border: 1px solid var(--color-neutral);
        min-width: 12rem;
        padding: 0;
        margin: var(--default-margin);
      }
      .uiPanelTitle {
        background-color: var(--color-neutral);
        color: #333;
        width: 100%;
        padding: var(--default-padding);
        font-weight: bold;
        font-size: 0.8rem;
      }
      .uiPanelBody {
        padding: var(--default-padding);
        background-color: var(--color-lightest);
      }
      `}</style>
  </div>
);

export default Panel;
