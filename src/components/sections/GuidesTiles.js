import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};

const GuidesTiles = ({
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
	const { path, url } = useRouteMatch();

	const outerClasses = classNames(
		"features-tiles section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		// 'features-tiles-inner section-inner pt-0',
		"features-tiles-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames(
		"tiles-wrap center-content",
		pushLeft && "push-left"
	);

	const sectionHeader = {
		title: "College Guides",
		paragraph:
			"Learn about essential college topics from our thorough guides, written by students, for students."
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<Link to={`${url}/majors-and-minors`}>
							<div className="tiles-item reveal-from-bottom">
								<div className="tiles-item-inner">
									<div className="features-tiles-item-header">
										<div className="features-tiles-item-image mb-16">
											<Image
												src={require("./../../assets/images/feature-tile-icon-01.svg")}
												alt="Features tile icon 01"
												width={64}
												height={64}
											/>
										</div>
									</div>
									<div className="features-tiles-item-content">
										<h4 className="mt-0 mb-8">Majors and Minors</h4>
										<p className="m-0 text-sm">
											All your questions about majors and minors in college,
											answered here. Click to learn more.
										</p>
									</div>
								</div>
							</div>
						</Link>

						<Link to={`${url}/clubs-and-extracurriculars`}>
							<div
								className="tiles-item reveal-from-bottom"
								data-reveal-delay="200"
							>
								<div className="tiles-item-inner">
									<div className="features-tiles-item-header">
										<div className="features-tiles-item-image mb-16">
											<Image
												src={require("./../../assets/images/feature-tile-icon-02.svg")}
												alt="Features tile icon 02"
												width={64}
												height={64}
											/>
										</div>
									</div>
									<div className="features-tiles-item-content">
										<h4 className="mt-0 mb-8">Clubs and Extracurriculars</h4>
										<p className="m-0 text-sm">
											All your questions about clubs and extracurriculars in
											college, answered here. Click to learn more.
										</p>
									</div>
								</div>
							</div>
						</Link>

						<a href="/faqs">
							<div
								className="tiles-item reveal-from-bottom"
								data-reveal-delay="400"
							>
								<div className="tiles-item-inner">
									<div className="features-tiles-item-header">
										<div className="features-tiles-item-image mb-16">
											<Image
												src={require("./../../assets/images/feature-tile-icon-03.svg")}
												alt="Features tile icon 03"
												width={64}
												height={64}
											/>
										</div>
									</div>
									<div className="features-tiles-item-content">
										<h4 className="mt-0 mb-8">Housing and Transportation</h4>
										<p className="m-0 text-sm">
											All your questions about housing and transportation in
											college, answered here. Click to learn more.
										</p>
									</div>
								</div>
							</div>
						</a>

						<a href="/faqs">
							<div
								className="tiles-item reveal-from-bottom"
								data-reveal-delay="600"
							>
								<div className="tiles-item-inner">
									<div className="features-tiles-item-header">
										<div className="features-tiles-item-image mb-16">
											<Image
												src={require("./../../assets/images/feature-tile-icon-04.svg")}
												alt="Features tile icon 04"
												width={64}
												height={64}
											/>
										</div>
									</div>
									<div className="features-tiles-item-content">
										<h4 className="mt-0 mb-8">
											How to Pick the Right College for You
										</h4>
										<p className="m-0 text-sm">
											All your questions about how to pick the right college for
											you, answered here. Click to learn more.
										</p>
									</div>
								</div>
							</div>
						</a>

						<a href="/faqs">
							<div
								className="tiles-item reveal-from-bottom"
								data-reveal-delay="800"
							>
								<div className="tiles-item-inner">
									<div className="features-tiles-item-header">
										<div className="features-tiles-item-image mb-16">
											<Image
												src={require("./../../assets/images/feature-tile-icon-05.svg")}
												alt="Features tile icon 05"
												width={64}
												height={64}
											/>
										</div>
									</div>
									<div className="features-tiles-item-content">
										<h4 className="mt-0 mb-8">Careers after College</h4>
										<p className="m-0 text-sm">
											All your questions about careers after college, answered
											here. Click to learn more.
										</p>
									</div>
								</div>
							</div>
						</a>

						<a href="/faqs">
							<div
								className="tiles-item reveal-from-bottom"
								data-reveal-delay="1000"
							>
								<div className="tiles-item-inner">
									<div className="features-tiles-item-header">
										<div className="features-tiles-item-image mb-16">
											<Image
												src={require("./../../assets/images/feature-tile-icon-06.svg")}
												alt="Features tile icon 06"
												width={64}
												height={64}
											/>
										</div>
									</div>
									<div className="features-tiles-item-content">
										<h4 className="mt-0 mb-8">Misc. Tips and Tricks</h4>
										<p className="m-0 text-sm">
											All your questions about other topics related to college,
											answered here. Click to learn more.
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

GuidesTiles.propTypes = propTypes;
GuidesTiles.defaultProps = defaultProps;

export default GuidesTiles;
