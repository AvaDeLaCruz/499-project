import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};

const HowToPickTheRightCollege = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"testimonial section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"testimonial-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

	const sectionHeader = {
		title: "How to Pick the Right College for You",
		paragraph:
			"Real insights from current college students all about how to pick the right college for you."
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<h3> Title</h3>
									<p className="text-sm mb-0">— Body</p>
								</div>

								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										written by Ava DeLaCruz
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Computer Science student, Class of 2022</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

HowToPickTheRightCollege.propTypes = propTypes;
HowToPickTheRightCollege.defaultProps = defaultProps;

export default HowToPickTheRightCollege;
