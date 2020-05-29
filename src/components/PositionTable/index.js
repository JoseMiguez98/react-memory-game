// @packages
import React, { useEffect, useState } from 'react';

// @app
import './styles.scss';

const PositionTable = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch('api/positions');
      response = await response.json();
      return response;
    }
    fetchAPI().then(data => setPositions(data));
  },[])

  return (
    <div className="position-table">
      <div className="position-table__title">Position table</div>
      <div className="position-table__positions">
        <table className="position-table__table">
          <tbody>
            {positions.length ? positions.map(pos => (
              <tr className="position-table__table-row" key={`position${pos.id}`}>
                <td className="position-table__table-cell">{pos.name}</td>
                <td className="position-table__table-cell">{pos.score}</td>
              </tr>
            )) : <tr><td>Loading...</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default PositionTable;