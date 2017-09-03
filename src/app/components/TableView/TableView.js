import React from 'react';
import PropTypes from 'prop-types';

import './TableView.css';

export default function TableView(props) {
  const pageNumbers = [...new Array(props.totalPages).keys()];
  const pageLengths = [10, 20, 50, 100, 200, 500];

  return (
    <div>
      <p>{props.title}</p>
      <div>
        <div className="table-view-input-row">
          <label>
            Entries per page:
            <select value={props.pageLength} onChange={props.setPageLength}>
              {pageLengths.map(length => (
                <option key={`option-${length}`} value={length}>{length}</option>
              ))}
            </select>
          </label>
          <label>
            Page number:
            <select value={props.page} onChange={props.setPage}>
              {pageNumbers.map(no => (
                <option key={`option-${no}`} value={no}>{no + 1}</option>
              ))}
            </select>
          </label>
        </div>

        {props.loading && <p>{'Loading...'}</p>}

        <p>{props.error}</p>
        <table className="table-view-table">
          <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>IMG</td>
          </tr>
          </thead>
          <tbody>
          {
            props.data.map(entry => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.title}</td>
                <td>{entry.body}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
  pageLength: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPageLength: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

TableView.defaultProps = {
  data: [],
  title: 'Data:',
  pageLength: 20,
  page: 0,
  totalPages: 1,
  setPageLength: () => null,
  setPage: () => null,
};
