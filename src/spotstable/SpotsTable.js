import React from 'react';
import './styles.css'

function SpotsTable({ spots }) {
    const renderTableRows = () => {
        return Array.from(spots, ([spotNumber, spotStatus]) => (
          <tr key={spotNumber}>
            <td>{spotNumber}</td>
            <td>{spotStatus}</td>
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
