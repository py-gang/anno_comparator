import HtmlMeta from "../html-heads/HtmlMeta";
import InterpolatedAnnos from "../components/InterpolatedAnnos";
import {Fragment} from "react";
import ApiSettings from "../components/ApiSettings";
import AnnoCollection from "../components/AnnoCollection";
import FrameBrowser from "../components/FrameBrowser";
import SelectedAnnos from "../components/SelectedAnnos";
import CurrentFrameAnno from "../components/CurrentFrameAnno";

const Index = () => (
  <Fragment>
    <HtmlMeta/>
    <main className="main">
      <div className="column">
        <ApiSettings />
        <AnnoCollection />
      </div>
      <div className="column">
        <FrameBrowser />
        <div className="row">
          <SelectedAnnos/>
          <InterpolatedAnnos />
          <CurrentFrameAnno />
        </div>
      </div>

    </main>
    <style jsx>{`
      .main {
        display: flex;
        flex-flow: row wrap;
      }
      .column {
        display: flex;
        flex-flow: column;
      }
      .row {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
      }
      `}</style>
  </Fragment>
);

export default Index;
