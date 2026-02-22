import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

// Essential Leaflet CSS
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

// --- PIXEL PERFECT ICON FIX ---
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Helper to fix the "Grey Screen" by forcing a resize after mount
function MapResizeTrigger() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
}

const LondonMap: React.FC = () => {
  // Explicitly typing the tuple to satisfy TypeScript
  const position: [number, number] = [51.5033, -0.1195];

  return (
    <div className={styles.fullWidthWrapper}>
      <div className={styles.mapContainer}>
        
        {/* Floating Info Card */}
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.title}>The London Eye</h3>
              <div className={styles.ratingRow}>
                <span className={styles.ratingText}>4.5</span>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.reviewCount}>(197,631)</span>
              </div>
            </div>
            <div className={styles.directions}>
              <div className={styles.dirArrow}>↱</div>
              <span className={styles.dirLabel}>Directions</span>
            </div>
          </div>
          
          <div className={styles.addressSection}>
            Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom
          </div>
          
          <a href="#" className={styles.largerMapLink}>View larger map</a>
        </div>

        {/* Map Logic */}
        <MapContainer 
          center={position} 
          zoom={15} 
          zoomControl={false}
          className={styles.leafletMap}
        >
          <MapResizeTrigger />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </MapContainer>
      </div>
    </div>
  );
};

export default LondonMap;