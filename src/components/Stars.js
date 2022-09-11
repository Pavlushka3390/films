
import React from "react";
import PropTypes from "prop-types";

const Star = () => (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
</svg>
);

const Stars = ({ count }) => (
  Number.isInteger(count) && (0 < count) && (6 > count) && (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count).keys()].map(i => (<Star key={i} />))}
    </ul>
  )
);

Stars.propTypes = {
  count: PropTypes.number
};

export default Stars;