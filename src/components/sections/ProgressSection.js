import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import SectionHeader from "./partials/SectionHeader";
import ProgressBar from "../elements/ProgressBar";
import Switch from "../elements/Switch";
import Checkbox from "../elements/Checkbox";
import { Link } from "react-router-dom";

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
		"Use the checklist below to keep track of your progress on College Central. Once you complete an item, click the checkbox to mark it as done."
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

	const [progress, setProgress] = useState(
		JSON.parse(localStorage.getItem("progress")) || 0
	);

	useEffect(() => {
		if (localStorage.getItem("progress") == null) {
			localStorage.setItem("progress", 0); //set checkbox as unchecked by default if no prior data stored
		}
	});

	const updateProgress = checked => {
		console.log(checked);
		const currentProgress = JSON.parse(localStorage.getItem("progress"));
		let newProgress = checked ? currentProgress + 1 : currentProgress - 1;
		localStorage.setItem("progress", newProgress);
		setProgress(newProgress);
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<ProgressBar progress={progress} />
					<div className="flex-container">
						<div className="flex-item">
							<Checkbox
								className="student-stories"
								id="checkbox-student-stories"
								name="checkbox-student-stories"
								updateProgress={updateProgress}
							>
								<label>
									<b>Why College:</b> Read our{" "}
									<Link to="/why-college">student stories.</Link>
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="majors-minors"
								id="checkbox-majors-minors"
								name="checkbox-majors-minors"
								updateProgress={updateProgress}
							>
								<label>
									<b>Guides:</b> Read our{" "}
									<Link to="/guides/majors-and-minors">
										guide about majors and minors.
									</Link>
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="clubs-extracurriculars"
								id="checkbox-clubs-extracurriculars"
								name="checkbox-clubs-extracurriculars"
								updateProgress={updateProgress}
							>
								<label>
									<b>Guides:</b> Read our{" "}
									<Link to="/guides/clubs-and-extracurriculars">
										guide about clubs and extracurriculars.
									</Link>
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="housing-transportation"
								id="checkbox-housing-transportation"
								name="checkbox-housing-transportation"
								updateProgress={updateProgress}
							>
								<label>
									<b>Guides:</b> Read our{" "}
									<Link to="/guides/housing-and-transportation">
										guide about housing and transportation.{" "}
									</Link>
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="how-to-pick"
								id="checkbox-how-to-pick"
								name="checkbox-how-to-pick"
								updateProgress={updateProgress}
							>
								<label>
									<b>Guides:</b> Read our{" "}
									<Link to="/guides/how-to-pick-the-right-college">
										guide about how to pick the right college for you.
									</Link>
								</label>
							</Checkbox>
						</div>
						<div className="flex-item">
							<Checkbox
								className="careers-after"
								id="checkbox-careers-after"
								name="checkbox-careers-after"
								updateProgress={updateProgress}
							>
								<label>
									<b>Guides:</b> Read our{" "}
									<Link to="/guides/careers-after-college">
										guide about careers after college.
									</Link>
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
