import React from 'react';
import './styles.css'

function SpotsTable() {
    const spotsData = [];
    
    for (let i = 1; i <= 37; i++) {
        spotsData.push({spotNumber: i, spotStatus: "Open" })
    }
    const renderTableRows = () => {
        return spotsData.map(spot => (
          <tr key={spot.spotNumber}>
            <td>{spot.spotNumber}</td>
            <td>{spot.spotStatus}</td>
          </tr>
        ));
      };
    
      return (
        <table border="1">
          <thead>
            <tr>
              <th>Spot #</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
      );
    }
export default SpotsTable;
