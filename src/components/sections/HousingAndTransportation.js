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

const HousingAndTransportation = ({
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
		title: "Housing and Transportation",
		paragraph:
			"Real insights from current college students all about how to find housing and transportation for college."
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
									<h3>Housing</h3>

									<p className="text-sm mb-0">
										— When determining where to live for college, there are two main 
										buckets that housing options fall into
										: <b>on-campus</b> and <b>off-campus</b> housing. The names end 
										up being quite descriptive of the concepts: to live on-campus 
										means to live in university-provided housing that is 
										geographically within campus bounds, and vice versa for off-campus housing.
										<br /><br />
										When trying to figure out which housing option is right for you,
										the best place to start is considering all the different
										factors which influence the housing experience and deciding
										which are most important to you.
										<br /><br />
										Some of the <b>pros</b> of living <b>on campus</b> include the ease of making new friends, 
										eases the transition to college, promotes healthy study habits, a shorter 
										commute to classes and other central locations on campus, ensures safety 
										because of campus security, and more extracurricular activities.
										<br /><br />
										Some of the <b>cons</b> of living <b>on campus</b> include its cost, the fact that it
										is lump-sum payment prior to the start of the semester, generally has roommates 
										and you may not be able to choose your roommates, have to follow dorm policies 
										(for example, there may be a restriction on cooking appliances), generally smaller 
										than private accommodations at a similar price, and may not be available during breaks.
										<br /><br />
										Some of the <b>pros</b> of living <b>off campus</b> include ncreased independence, 
										lower costs, greater freedom, more space, the ability to build a rental history, summer 
										housing, and more freedom to host friends over without worry of roommates.
										<br /><br />
										Some of the <b>cons</b> of living <b>off campus</b> include extra bills (WiFi, utilities, 
										garbage), slower maintenence times, further from campus, 12 month leases, and may require 
										furnishings.
										<br /><br />
										Here are some other links to help aid the search and make the best decision for you!
										<br /><br />
										<a href="https://www.affordablecollegesonline.org/college-resource-center/college-housing-survival-guide/">
											https://www.affordablecollegesonline.org/college-resource-center/college-housing-survival-guide/
										</a>
										<br />
										<a href="https://www.bestcolleges.com/resources/student-renters-guide/">
											https://www.bestcolleges.com/resources/student-renters-guide/
										</a>
									</p>

									<h3>Transportation</h3>
									<p className="text-sm mb-0">
										There are plenty of solutions on ways to get to campus. Some of them include the following:
										<ul>
											<h5><li>
												Public Transportation
											</li></h5>
											Public transportation saves money, helps the environment, relieves congestion, provides 
											ample opportunity to get to the most essential locations and might even be discounted 
											for you. When looking for this, check to see whether the college you are interested in 
											is located in a city or has it's own public transit system.
											<h5><li>
												Ridesharing Services
											</li></h5>
											Companies like Uber and Lyft are there to help individuals get where they need to be, 
											including trips to school. Splitting the cost with a few friends going in the same 
											direction can make the trip more affordable for everyone.
											<h5><li>
												Use a Bike or Skateboard
											</li></h5>
											Depending upon how close you live to the campus, riding a bike to class might 
											be an excellent option. Not only does it provide great exercise and lessen congestion 
											on the roads, it can allow for the freedom of going to and from class on your own 
											schedule, not one based on public transit routes.
										</ul>
										Here are some other links to help aid the search and consider costs!
										<br /><br />
										<a href="https://www.accreditedschoolsonline.org/resources/transportation-in-college-and-on-campus/">
											https://www.accreditedschoolsonline.org/resources/transportation-in-college-and-on-campus/
										</a>
										<br />
										<a href="http://perspectives.acct.org/stories/transportation-costs-in-student-living-expenses">
											http://perspectives.acct.org/stories/transportation-costs-in-student-living-expenses
										</a>
									</p>

								</div>

								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										written by Yash Chandak
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										Computer Science student, Class of 2022
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

HousingAndTransportation.propTypes = propTypes;
HousingAndTransportation.defaultProps = defaultProps;

export default HousingAndTransportation;
