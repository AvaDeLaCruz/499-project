import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	children: PropTypes.node
	// status: PropTypes.string
};

const defaultProps = {
	children: null
	// status: false
};

const ProgressBar = ({ children, className, status, ...props }) => {
	const classes = classNames(
		"progress-bar",
		// status && `text-color-${status}`,
		className
	);

	return (
		<div {...props} className={classes}>
			<progress value="0" max="100">
				0%
			</progress>
			{children}
		</div>
	);
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
