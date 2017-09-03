import React from 'react';
import PropTypes from 'prop-types';

export default function ContentView(props) {
  return (
    <div>
      <p>{props.title}</p>
      <div>
        {props.data.map(post => (
          <div key={`post-${post.id}`} className="content-view-data-entry">
            <h3>{`#${post.id}: ${post.title}`}</h3>
            <p>{post.body}</p>
          </div>
        ))}
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
