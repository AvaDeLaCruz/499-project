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

const CareersAfterCollege = ({
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
		title: "Careers After College",
		paragraph:
			"Real insights from current college students all about how to find careers after college."
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
									<h3>Careers after College</h3>

									<p className="text-sm mb-0">
										— When determining what to do after college, there are so many options! 
										Here are some of them:
										<ul>
											<h5><li>
												Enter the workforce as a full-time employee
											</li></h5>
											Sometimes, the best option after college graduation is to take 
											an entry-level position to gain skills and experience. A 
											real-world, full-time job will help you build your 
											resume and give you the support you need to plan for your 
											future and prepare to earn your dream job.
											<h5><li>
												Continue your education in a master's program
											</li></h5>
											Graduate school is a fantastic option for those who know they 
											need a post-graduate education to meet their long-term career 
											goals. Research graduate programs and schools before applying 
											to make sure you complete a degree that will benefit your 
											intended career.
											<h5><li>
												Find an internship or co-op program
											</li></h5>
											Internships are a great way for recent graduates to gain entry 
											into competitive industries or companies. While internships can 
											pay less than full-time positions, they often result in resume 
											experience, recommendation letters and even full-time positions.
											<h5><li>
												Start your own company
											</li></h5>
											If you have an idea for a great product or a strong passion, 
											starting your own business can be the best way to create your dream job. 
											<h5><li>
												Take a gap year
											</li></h5>
											A gap year is a time of exploration and travel after high school 
											or college graduation. Often, graduates who take gap years use 
											that time to experience a new culture and build their soft skills 
											like communication and problem-solving. A gap year can be a great 
											way to gain new experiences and meet new people who may be able 
											to help you find your ideal job once you're ready.
										</ul>
										Here are some other links to help aid the search and make the best decision for you!
										<br /><br />
										<a href="https://www.prepscholar.com/gre/blog/what-is-graduate-school/">
											https://www.prepscholar.com/gre/blog/what-is-graduate-school/
										</a>
										<br />
										<a href="https://www.learnhowtobecome.org/career-resource-center/grads-get-hired-guide/">
											https://www.learnhowtobecome.org/career-resource-center/grads-get-hired-guide/
										</a>
										<br />
										<a href="https://www.glassdoor.com/blog/guide/how-to-get-an-internship/">
											https://www.glassdoor.com/blog/guide/how-to-get-an-internship/
										</a>
										<br />
										<a href="https://www.forbes.com/sites/allbusiness/2018/07/15/35-step-guide-entrepreneurs-starting-a-business/">
											https://www.forbes.com/sites/allbusiness/2018/07/15/35-step-guide-entrepreneurs-starting-a-business/
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

CareersAfterCollege.propTypes = propTypes;
CareersAfterCollege.defaultProps = defaultProps;

export default CareersAfterCollege;
