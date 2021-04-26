import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	children: PropTypes.node,
	status: PropTypes.string
};

const defaultProps = {
	children: null,
	status: false
};

const ProgressBar = ({ children, className, status, ...props }) => {
	const classes = classNames(
		"form-hint",
		status && `text-color-${status}`,
		className
	);

	return (
		<div {...props} className={classes}>
			<progress value="1" max="7"></progress>
			{children}
		</div>
	);
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
