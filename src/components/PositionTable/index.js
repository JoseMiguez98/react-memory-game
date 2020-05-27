// @packages
import React from 'react';

// @app
import './styles.scss';

const PositionTable = () => (
  <div className="position-table">
    <div className="position-table__title">Position table</div>
    <div className="position-table__positions">
      <table className="position-table__table">
        <tbody>
          <tr>
            <td className="position-table__table-cell">Player 1</td>
            <td className="position-table__table-cell">80</td>
          </tr>
          <tr>
            <td className="position-table__table-cell">Player 2</td>
            <td className="position-table__table-cell">40</td>
          </tr>
          <tr>
            <td className="position-table__table-cell">Player 3</td>
            <td className="position-table__table-cell">20</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PositionTable;