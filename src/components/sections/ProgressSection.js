import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import SectionHeader from "./partials/SectionHeader";
import ProgressBar from "../elements/ProgressBar";
import Switch from "../elements/Switch";
import Checkbox from "../elements/Checkbox";

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

	// const handleCheckboxChange = e => {
	// 	// e.preventDefault();
	// 	if (e.target.type === "checkbox") {
	// 		const id = JSON.stringify(e.target.id);
	// 		const checked = JSON.stringify(e.target.checked);
	// 		localStorage.setItem(id, checked);
	// 	}
	// };

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<ProgressBar />
					<div className="flex-container">
						<div className="flex-item">
							<Checkbox
								className="student-stories"
								id="checkbox-student-stories"
								name="checkbox-student-stories"
								// checked={false}
								// onChange={handleCheckboxChange}
							>
								<label>
									<b>Why College?</b> Read our student stories.
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="majors-minors"
								id="checkbox-majors-minors"
								name="checkbox-majors-minors"

								// checked={true}
								// onChange={handleCheckboxChange}
							>
								<label>
									<b>Guides:</b> Read our guides about majors and minors.
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="clubs-extracurriculars"
								id="checkbox-clubs-extracurriculars"
								name="checkbox-clubs-extracurriculars"

								// checked={localStorage.getItem()}
								// onChange={handleCheckboxChange}
							>
								<label>
									<b>Guides:</b> Read our guides about clubs and
									extracurriculars.
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="housing-transportation"
								id="checkbox-housing-transportation"
								name="checkbox-housing-transportation"

								// onChange={handleCheckboxChange}
							>
								<label>
									<b>Guides:</b> Read our guides about housing and
									transportation.
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="how-to-pick"
								id="checkbox-how-to-pick"
								name="checkbox-how-to-pick"

								// onChange={handleCheckboxChange}
							>
								<label>
									<b>Guides:</b> Read our guides about how to pick the right
									college for you.
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="careers-after"
								id="checkbox-careers-after"
								name="checkbox-careers-after"

								// onChange={handleCheckboxChange}
							>
								<label>
									<b>Guides:</b> Read our guides about careers after college.
								</label>
							</Checkbox>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

ProgressSection.propTypes = propTypes;
ProgressSection.defaultProps = defaultProps;

export default ProgressSection;
