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
										— Being a first-generation student can come with many
										challenges, but it is something to be proud of and is well
										worth it at the end. As a first-generation college student
										who at first wasn’t too sure if I wanted to attend a
										four-year college, graduating from The University of
										Hartford is my life’s biggest accomplishment to date. My
										parents moved my brother and me from Peru to the United
										States solely for the purpose of having greater educational
										opportunities that could eventually lead to better job
										opportunities in any field that you are passionate about.
										What makes it challenging being a first-generation student
										is the lack of personal experience that our parents have
										with postsecondary education. Typically, parents of
										first-generation college students often lack awareness of
										the social and economic benefits of college attendance. One
										thing that made it more difficult for my parents to
										understand the process of attending college was their lack
										of the English language. In order for me to attend college,
										I had to seek guidance from others who already attended
										college and I had to educate myself about applying to
										schools, financial aid and scholarships. My junior and
										senior year of high school were very stressful in terms of
										figuring out what I wanted to do post graduating. If you
										feel like you have no idea, don’t be afraid because you are
										not alone. One of the hardest things for me was figuring out
										my financial situation and what schools worked best for me.
										It takes some time and a little bit of research as
										first-generation students to apply to schools that best fits
										your financial situation. One thing I wish my high school
										would’ve taught us more about is looking for different
										scholarships that one can apply for. I found out through
										family friends about these and it is something that really
										helped me out.
										<br /> <br /> I was very inspired and motivated by my family
										to attend college. All the hard work and sacrifices that my
										parents made for me and my brother inspired me to be the
										best that I can be. I wanted to make them proud by attending
										and graduating a four-year college. Throughout this process,
										I learned a lot about myself and I was really able to
										understand the value of college. Whatever you are passionate
										about or whatever field you want to eventually work in,
										there’s college courses/programs for anything and everything
										that can really help you in your future career. Aside from
										your education, college really gives you the opportunity to
										meet new people and experience different things. Your first
										year may be a little intimidating because you may not know a
										lot of people or anyone but you are on the same boat as
										almost everyone else that is a first year student. Colleges
										offers lots of different clubs within the school and if your
										school doesn’t have that club, they give you the opportunity
										to start one. If you were a high school athlete but didn’t
										want to play collegiate sports, you can always join a sports
										club that is less time consuming. You still get to enjoy the
										sport you love playing and you get to meet new people who
										share the same passion. Social networking is also a huge
										part of college which allows you to open up doors for
										different opportunities in the future. College isn’t only
										about your education but also being able to find yourself
										through different experiences and connecting with others.
										You don’t need to live on campus either to be able to do
										these things. Sometimes living at home and commuting can be
										a smarter plan financially but that comes down to your
										personal situation.
										<br /> <br /> For any first-generation student who has any
										doubt in attending college I would say really take your time
										to think it out, ask lots of questions and look at your
										options. There are many people out there that are willing to
										help if all you do is ask the questions. Being a first
										generation student going into college should be taken with a
										lot of pride. It takes a lot of courage to do something that
										no one else in your family has done and once you get through
										it, it is one of the best feelings in the world. College is
										a once in a lifetime experience that does come with many
										obstacles but it’s the beauty within those struggles that
										make it worthwhile. As a first generation student myself I
										highly recommend attending a college to be able to further
										your education and make memories that last for a lifetime.{" "}
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Sebastian M. Rengifo Amblodegui
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">
											First-Gen Criminal Justice + Psychology and Sociology
											Student, Class of 2019
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
