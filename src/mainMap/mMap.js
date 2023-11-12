import React from "react";
import { Link } from 'react-router-dom';
import "./mMap.css";

function mMap() {
  const rows = [];
  for (let row = 1; row <= 7; row++) {
    const cells = [];
    for (let col = 1; col <= 18; col++) {
      const spotNumber = row === 1 ? col : col + 18;
      cells.push(
        <td key={col} className="table-cell">
          {(row === 1 || row === 7) && (
            // Correct usage of template literals for dynamic path
            <Link to={`/reservedSpots/${spotNumber}`}>{spotNumber}</Link>
          )}
        </td>
      );
    }
    rows.push(<tr key={row}>{cells}</tr>);
  }

  return (
    <div className="mapContainer">
      <div className="tableWrapper">
        <table className="mMap">
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default mMap;
