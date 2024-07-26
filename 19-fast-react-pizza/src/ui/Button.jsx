import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export default function Button({ children, disabled, to, type }) {
  const base = {
    base: "bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wider rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.object.isRequired,
  disabled: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
