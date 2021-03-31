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

const Testimonial = ({
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
		title: "Student Stories",
		paragraph:
			"Real insights from current first-generation college students on why they chose college, what their college experience has been like, and what their advice would be to current high schoolers."
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
									<Image
										className="has-shadow"
										src={require("./../../assets/images/frankie.png")}
										alt="Hero"
										width={500}
										height={500}
										align="right"
										hspace="20px"
									/>
									<p className="text-sm mb-0">
										— The biggest factor which pushed me to go to college was
										the accomplishment it symbolizes. It shows that you can hand
										in assignments on time, study, and manage your time well. It
										also shows that this person is reliable, and went extra step
										in academics. It also looks good look on your resume. I did
										have a lot of fear initially about 'Should I go to college'?
										and I wish I knew then that colleges really want you to
										attend their college. They'll give you grants, financial
										aid, and also academic support and help if you need it. Some
										people might feel behind in high school and not be sure if
										they want to go to college, but there's a lot of support
										available and you can do it.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Frank Carpio
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">
											First-Gen Graphic Design Student, Class of 2020
										</a>
									</span>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-left">
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<Image
										className="has-shadow"
										src={require("./../../assets/images/lina.jpeg")}
										alt="Hero"
										width={450}
										height={450}
										align="left"
										hspace="20px"
									/>
									<p className="text-sm mb-0">
										— I wish I'd known how much of a shock college would be. I
										think the most shocking thing was realizing that I am a
										first-generation college student. It was very isolating, and
										I often doubted my place here at USC. However, I was able to
										join a support group for first-generation students during my
										freshmen year, and that was super grounding and really
										important to me. Even though I dealt with that initial
										loneliness, I've ultimately been able to form stronger
										relationships with those around me. I think one of the
										greatest values of college has been meeting different kinds
										of people. This scared me at first because I went to a very
										small suburban high school, and everyone was pretty much the
										same. Here I've met individuals from all parts of the world
										with different beliefs, ideologies, and upbringings. I
										really value the diversity we have here.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Angelina Crittenden
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">
											First-Gen Human Biology + Forensics and Criminality +
											Health Care Studies student, Class of 2022
										</a>
									</span>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— The biggest factor which pushed me to go to college was
										the accomplishment it symbolizes. It shows that you can hand
										in assignments on time, study, and manage your time well. It
										also shows that this person is reliable, and went extra step
										in academics. It also looks good look on your resume.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Sharif Simon
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">
											First-Gen Computer Science Student, Class of 2024
										</a>
									</span>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-left"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										I did have a lot of fear initially about 'Should I go to
										college'? and I wish I knew then that colleges really want
										you to attend their college. They'll give you grants,
										financial aid, and also academic support and help if you
										need it. Some people might feel behind in high school and
										not be sure if they want to go to college, but there's a lot
										of support available and you can do it.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Sara Jacob
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">
											First-Gen Electrical Engineering Student, Class of 2023
										</a>
									</span>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— I wish I'd known how much of a shock college would be. I
										think the most shocking thing was realizing that I am a
										first-generation college student. It was very isolating, and
										I often doubted my place here at USC. However, I was able to
										join a support group for first-generation students during my
										freshmen year, and that was super grounding and really
										important to me.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Amalia Luna
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">First-Gen Psychology Student, Class of 2019</a>
									</span>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-left"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— I think one of the greatest values of college has been
										meeting different kinds of people. This scared me at first
										because I went to a very small suburban high school, and
										everyone was pretty much the same. Here I've met individuals
										from all parts of the world with different beliefs,
										ideologies, and upbringings. I really value the diversity we
										have here.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Nuria Yaiza
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">
											First-Gen Communications Student, Class of 2022
										</a>
									</span>
								</div>
							</div>
						</div>

						{/* <div
							className="tiles-item reveal-from-left"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										— Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum cillum dolore eu fugiat.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Paulina Reyna
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">
											First-Gen Communications student, Class of 2020
										</a>
									</span>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
