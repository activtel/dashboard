import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import './Map.css';
import logo from './logo.svg';

/**
 * Компонент для просмотра данныых на карте.
 */
const MapAdress = ({ match }) => {
  return (
    <Map onAPIAvailable={function () { console.log('API loaded'); }} center={[+match.params.latitude, +match.params.longitude]} zoom={16} width="100%" height="100%">
      <Marker lat={+match.params.latitude} lon={+match.params.longitude}>
        <MarkerLayout>
          <div className="balloon-position"><div className={match.params.icon}></div><div className="balloon-container"><div></div><img src={logo} className="d-inline-block align-top logo" alt="" /><div></div></div></div>
        </MarkerLayout>
      </Marker>
    </Map>
  )
};

MapAdress.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MapAdress;
