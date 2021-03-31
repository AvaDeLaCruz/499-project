import React from "react";
import classNames from "classnames";
import Image from "../elements/Image";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};

const GuideExpanded2 = ({
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
		title: "Clubs and Extracurriculars",
		paragraph:
			"Real insights from current college students all about clubs and extracurricular activities."
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
									<h3>College Clubs and Activities 101</h3>
									<p className="text-sm mb-0">
										— In my opinion, one of the best parts about my college
										experience has been the clubs and extracurricular activites.
										Clubs and extracurriculars in college are pretty different
										from high school, although there are some similarities.
									</p>{" "}
									<br></br>
									<p className="text-sm mb-0">
										Personally, I love coding. At my high school, we had one
										Computer-Science-related-club, which was focused on teaching
										young girls to code. Even though I loved this experience,
										there weren't any opportunities to learn how to code
										different things myself, like apps or websites, or to
										explore different areas of Computer Science, like
										cybersecurity or artificial intelligence.
									</p>
									<br></br>
									<p className="text-sm mb-0">
										In college, this is totally different. Colleges are usually
										bigger than high schools and have more students with more
										interests, and so there are more clubs to choose from. For
										example, at USC, we have a cyber security club called
										CybOrg, an artificial intelligence club called CAIS++, a
										coding for social good club called Code the Change, and the
										list goes on and on.
									</p>
									<br></br>
									<p className="text-sm mb-0">
										If tech isn't your thing, no worries :,) There are so many
										types of different clubs at college, and Computer-Science
										clubs are just a small example. There are a few main groups
										of clubs, like...
									</p>
									<br></br>
									<ul>
										<li>
											Club Sports, such as soccer, flag football, and tennis
										</li>
										<li>
											Cultural Organizations, like Latinx Student Assembly
										</li>
										<li>
											Recreational/Hobby Clubs, like Art clubs and Board Game
											club
										</li>
										<li>Service and Volunteering clubs, and</li>
										<li>Spiritual + Wellness clubs</li>
									</ul>
									<br></br>
									<p className="text-sm mb-0">
										Although these vary from school to school, most schools will
										have clubs in each category. For more examples, you can
										explore USC's student organization page here:{" "}
										<a href="https://usc.campuslabs.com/engage/organizations">
											https://usc.campuslabs.com/engage/organizations.
										</a>
									</p>
									<br></br>
									<p className="text-sm mb-0">
										If you're interested in learning more about different clubs
										offered at different universites, here are some additional
										resources to explore.{" "}
									</p>
									<br></br>
									<p className="text-sm mb-0">
										<a href="https://thebestschools.org/magazine/popular-college-clubs/">
											https://thebestschools.org/magazine/popular-college-clubs/
										</a>
									</p>
									<p className="text-sm mb-0">
										<a href="https://www.bentley.edu/news/12-reasons-why-you-should-join-student-organization">
											https://www.bentley.edu/news/12-reasons-why-you-should-join-student-organization
										</a>
									</p>
									<p className="text-sm mb-0">
										<a href="https://www.collegecovered.com/getting-into-college/quiz-what-college-club-should-i-join/">
											https://www.collegecovered.com/getting-into-college/quiz-what-college-club-should-i-join/
										</a>
									</p>
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

GuideExpanded2.propTypes = propTypes;
GuideExpanded2.defaultProps = defaultProps;

export default GuideExpanded2;
