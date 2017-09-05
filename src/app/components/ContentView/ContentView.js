import React from 'react';
import PropTypes from 'prop-types';

export default function ContentView(props) {
  return (
    <div>
      <p>{props.title}</p>
      <div>
        {props.loading && <p>{'Loading...'}</p>}

        <p>{props.error}</p>
        {
          props.data.map(entry => (
            <div key={`post-${entry.id}`} className="content-view-data-entry">
              <h3>{`#${entry.id}: ${entry.title}`}</h3>
              <p>{entry.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
ContentView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

ContentView.defaultProps = {
  data: [],
  title: 'Data:',
};
