import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from '@material-ui/icons';
import './app.css';

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -6.7924,
    longitude: 39.2083,
    zoom: 12,
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/ejoka/cktmgtr0n6wto18wb9c4fogyt"
      >
        <Marker
          latitude={-6.8166}
          longitude={39.2896}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{ fontSize: viewport.zoom * 3, color: "slateblue" }} />
        </Marker>
        <Popup
          latitude={-6.8166}
          longitude={39.2896}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Askari Monument</h4>
            <label>Review</label>
            <p>Oldest statue in the city of Dar</p>
            <label>Review</label>
            <div className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <label>Information</label>
            <span className="username">Created by <b>Emmanuel</b></span>
            <span className="date">1 hour ago.</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;
