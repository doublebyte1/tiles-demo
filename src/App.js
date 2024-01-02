import './App.css';

import { MapContainer, TileLayer, LayersControl} from 'react-leaflet'


const center = [51.505, -0.09]


const options = {
  type: 'protobuf',
  url: 'https://demo.pygeoapi.io/master/collections/lakes/tiles/WorldCRS84Quad/{z}/{x}/{y}?f=mvt',
};

function App() {
  return (
    <div className="App">
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Vector Tiles on pygeoapi">

          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer> 
    </div>
  );
}

export default App;
