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
									<h3>Beginning Your College Search</h3>

									<p className="text-sm mb-0">
										— So you've decided you're interested in going to college,
										but you're not sure where to start with figuring out which
										is the right college for you. In reality, there is no
										"perfect" college, which means it's really up to you to
										decide what kind of school is the best fit for you.
									</p>
									<br></br>
									<p className="text-sm mb-0">
										When trying to figure out which college is right for you,
										the best place to start is considering all the different
										factors which influence the college experience and deciding
										which are most important to you.
									</p>
									<br></br>
									<p className="text-sm mb-0">
										Here's what I mean: <br></br>
										Some examples of factors which influence the college
										experience are...
									</p>
									<br></br>
									<p>
										<ul>
											<li>
												<b>Location</b>
											</li>
											<ul>
												<li>Would you rather be close to or far from home?</li>
												<li>
													Would you rather live in a city, in a rural area, or
													somewhere in between?
												</li>
											</ul>
											<li>
												<b>Size</b>
											</li>
											<ul>
												<li>
													Would you rather have large or small class sizes?
												</li>
												<li>
													Would you rather go to school with more students, or
													less?
												</li>
											</ul>
											<li>
												<b>Programs</b>
											</li>
											<ul>
												<li>
													Are you interested in the majors that the school
													offers?
												</li>
												<li>
													Is the school well-known for the program you're
													interested in?
												</li>
											</ul>
											<li>
												<b>People</b>
											</li>
											<ul>
												<li>
													How important is it to you to have a diverse campus?
												</li>
												<li>
													Would you rather go to a school with a mixed
													population or a targeted population (ie. all women's
													colleges, historically Black colleges/universities)?
												</li>
											</ul>
											<li>
												<b>Opportunities</b>
											</li>
											<ul>
												<li>
													Does the school offer opportunities outside of the
													classroom that seem interesting? Some examples of
													these are study abroad programs and clubs.
												</li>
											</ul>
											<li>
												<b>Cost</b>
											</li>
											<ul>
												<li>
													Is this college within my and my family's price range?
												</li>
												<li>
													If not, does the school offer enough financial aid to
													help?
												</li>
												<li>
													note: public schools tend to be more affordable than
													private schools, but private schools often are able to
													offer more financial aid. so, both can be affordable,
													depending on the circumstances, even if private
													schools seem more expensive up front.
												</li>
											</ul>
										</ul>
									</p>
									<br></br>
									<p>
										These are just some examples of questions you can ask
										yourself to get started with your college search. Once you
										have a strong understanding of what is most important to
										you, finding a college which is a good fit becomes much
										easier.
									</p>
									<br></br>
									<p>
										Here are some resources to further help with your college
										search:
									</p>
									<p>
										<a href="https://bigfuture.collegeboard.org/college-search">
											https://bigfuture.collegeboard.org/college-search
										</a>
										<br></br>
										<a href="https://www.niche.com/about/college-quiz/">
											https://www.niche.com/about/college-quiz/
										</a>
										<br></br>
										<a href="https://www.collegecovered.com/getting-into-college/quiz-what-type-of-college-is-the-best-fit-for-me/">
											https://www.collegecovered.com/getting-into-college/quiz-what-type-of-college-is-the-best-fit-for-me/
										</a>
									</p>

									<br></br>
									<p>Good luck in your search! :)</p>
								</div>

								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										written by Ava DeLaCruz
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

HowToPickTheRightCollege.propTypes = propTypes;
HowToPickTheRightCollege.defaultProps = defaultProps;

export default HowToPickTheRightCollege;
