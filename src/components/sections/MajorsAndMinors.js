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

const MajorsAndMinors = ({
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
		title: "Majors and Minors",
		paragraph:
			"Real insights from current college students all about majors and minors."
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
									<h3>How to Choose your Major</h3>
									<p className="text-sm mb-0">
										—<h4>Definitions</h4>A <b>major</b> is a specific subject
										area you can specialize in. Typically, between one-third and
										one-half of the courses you’ll take in college will be in
										your major or related to it. A <b>minor</b> is a secondary
										field you can study in while completing your major. It
										requires fewer courses than a major.
										<h4>Steps to Help Decide your Major</h4>
										<ol>
											<h5>
												<li>Identify Interests and Passions</li>
											</h5>
											<p>
												Try listing things you enjoy doing, both academic and
												non-academic. Could you see yourself doing this years
												down the line? For the activities you enjoy, try looking
												at the bigger picture. For example, if you enjoy playing
												video games, consider going into Computer Science or
												Graphic Design. Also, consider personal strengths and
												weaknesses.
											</p>
											<h5>
												<li>Consider the Future Prospects</li>
											</h5>
											<p>
												College sets you up for the future, and your major is
												one of the biggest determinators. Consider your
												interests for after college. Do you want to go into
												academia? Have a career in the job market? Consider your
												major in this context. If you want to go into academia,
												try to choose a major that segues well into your area of
												interest. If you want to get a job, ensure that your
												major is employable and helps land your dream job.
											</p>
											<h5>
												<li>Talk to Professionals</li>
											</h5>
											<p>
												Try and talk to as many people as possible to learn more
												about the majors and future prospects for each major.
												This includes talking with high school and college
												counselors, professionals who have taken a career path
												you wish to emulate, and more. Learning from others can
												be instrumental in determining where your interests lie
												and what excites you.
											</p>
										</ol>
										<h4>Other Things to Note</h4>
										At the end of the day, if you can’t decide on a major, it’s
										okay to enter college as an Undecided Major. College allows
										you to take classes in areas you may not have been exposed
										to and better see the opportunities within each major so you
										can make the best decision for yourself. There is no
										substantial disadvantage to entering college as an undecided
										major! Generally, if you enter college as an Undecided
										Major, you are recommended to decide your major by the end
										of sophomore year.
										<br />
										<br />
										You can change your major in college! If you determine that
										the major you declare isn’t the right fit for you, you can
										switch. When making this decision, be sure to consult with
										your counselor to ensure that the credits line up so you can
										graduate on time. It’s always better to switch into a major
										that you are passionate about and will align with your
										priorities after college as well.
										<h4>External Resources</h4>
										<ul>
											<li>
												<a href="https://getschooled.com/journey/succeed-in-college/choosing-your-major/how-to-choose-a-college-major/">
													Get Schooled: How To Choose A College Major
												</a>
											</li>
											<li>
												<a href="https://blog.collegeboard.org/the-ultimate-guide-to-choosing-a-major">
													The Ultimate Guide to Choosing a Major
												</a>
											</li>
											<li>
												<a href="https://getschooled.com/article/5751-what-should-i-minor-in/">
													Get Schooled: What Should I Minor In?
												</a>
											</li>
										</ul>
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										written by Yash Chandak
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

MajorsAndMinors.propTypes = propTypes;
MajorsAndMinors.defaultProps = defaultProps;

export default MajorsAndMinors;
