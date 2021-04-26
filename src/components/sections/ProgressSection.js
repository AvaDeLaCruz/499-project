import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import SectionHeader from "./partials/SectionHeader";
import ProgressBar from "../elements/ProgressBar";
import Switch from "../elements/Switch";

const propTypes = {
	...SectionProps.types,
	split: PropTypes.bool
};

const defaultProps = {
	...SectionProps.defaults,
	split: false
};

const sectionHeader = {
	title: "My Progress",
	paragraph:
		"See your progress on College Central and keep track of what you've learned."
};

const ProgressSection = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	split,
	...props
}) => {
	const outerClasses = classNames(
		"features-tiles section center-content-mobile reveal-from-bottom",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-tiles section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
		split && "cta-split"
	);

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<ProgressBar />
				</div>
			</div>
		</section>
	);
};

ProgressSection.propTypes = propTypes;
ProgressSection.defaultProps = defaultProps;

export default ProgressSection;
