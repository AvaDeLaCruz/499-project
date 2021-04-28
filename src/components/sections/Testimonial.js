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
										<span>First-Gen Graphic Design Student, Class of 2020</span>
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
										<span>
											First-Gen Human Biology + Forensics and Criminality +
											Health Care Studies student, Class of 2022
										</span>
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
									<Image
										className="has-shadow"
										src={require("./../../assets/images/luis.jpg")}
										alt="Hero"
										width={450}
										height={450}
										align="right"
										hspace="20px"
									/>
									<p className="text-sm mb-0">
										Being able to support my family and community are the two
										most important things that inspired me to apply to a
										university. The most important thing I've learned is knowing
										the value of my own individual merit, knowing what I can
										contribute to the classroom and workplace. Attending college
										provided me with so many resources and gave me the
										opportunity to become more independent and learn a lot about
										myself, as well as providing an academic challenge and
										teaching me a lot. My advice for current high school
										students would be, if you're even thinking about college,
										apply, no matter what the acceptance rate is. Your chances
										of getting in are 0% if you don't try.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Luis T.
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<span>
											First-Gen Political Science Student, Class of 2022
										</span>
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
									<Image
										className="has-shadow"
										src={require("./../../assets/images/sebi.JPG")}
										alt="Hero"
										width={900}
										height={450}
										hspace="20px"
									/>
									<br></br>
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
										<span>
											First-Gen Criminal Justice + Psychology and Sociology
											Student, Class of 2019
										</span>
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
										— I decided to apply to college because I wanted to
										understand mental health issues in my community. More
										specifically, I wanted to address barriers in access to
										quality mental health services for underserved communities.
										One of the values of college is the ability to learn and
										improve issues that you find important. All of us have
										unique experiences that are essential for developing
										solutions to problems we face. Something that I wish I would
										have known before applying to college is that rejection is
										100% normal! It is part of the college application process
										and it happens to most of us. Remember that people might
										tell you that they were accepted but they are not likely to
										tell you that they got rejected. Do not let your fear of
										rejection stop you from applying to any school or any
										scholarship. However, do start preparing for college sooner
										rather than later (although I would argue that it is never
										too late). I was part of multiple college preparation
										program in high school such as AVID and Upward Bound. These
										programs prepared me for college by providing resources such
										as information about scholarships, SAT and ACT prep
										materials, and essay writing workshops. They also provided
										me with a strong support system through mentors (e.g.,
										teachers) and peers (e.g., current high school students).
										Even if you don’t have access to programs like these, use
										other resources at your disposal. Talk to your teachers or
										peers who are applying. You got this!!
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Jackie Garcia
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<span>
											First-Gen Psychology Master's Student, Class of 2021
										</span>
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
										—
										<h5>
											Looking back to high school, what do you wish you would
											have known about college?
										</h5>
										Considering that I left my hometown to go to a private
										university twenty-two hours away, I wish I would have known
										that homesickness is real and can be seriously negatively
										impactful if I were to succumb to it. I also wish I would
										have known that culture shock is not always a bad thing, I
										just have to be open minded; not everyone has gone through
										what I went through and we are all here in college to grow
										as scholars and human beings.
										<h5>What made/inspired you to apply to college?</h5>I
										wouldn’t describe it as inspired, but I definitely felt like
										my choices were quite limited. Knowing that I didn’t have
										any money to contribute towards my education, I saw college
										as shooting for the stars—not matter what, I wouldn’t lose
										anything if I tried. Though for some people this is easy,
										going to college had to outweigh not going to college: what
										would I gain in college compared to what would I gain
										outside of it? It was difficult, but I knew that college was
										the better option in the long run.
										<h5>What has been the value of college?</h5>
										The value of college is definitely different for everyone. I
										have met some amazing people and traveled to places that I
										never would have gone to; my exposure to new people and
										places is definitely cherished. Academically, college has
										opened doors to discovering my true scholarly passions,
										encouraged me to taste a bit of each field of study, and has
										connected me to scholars that I will look up to for many
										years to come in my desired work force and life.
										<h5>
											Where did you learn about the college application process?
										</h5>
										I learned about the college application process in my high
										school which I would consider myself lucky for having been
										able to. In high school, the students around me and their
										parents were bustling with questions since freshman year in
										a way that made learning about college quite organic.
										<h5>
											What obstacles did you face during high school and how did
											you overcome them?
										</h5>
										In high school, I encountered many waves of family turmoil
										and financial crises. With deaths, arrests, evictions, and
										late nights of general teen angst, I overcame my obstacles
										by talking to my friends and engaging in afternoon club
										activities that would keep me distracted. Especially during
										my senior, while my friends and I stressed through the
										college rollercoaster, we helped each other stay positive,
										talked about light hearted things like prom, movies, music,
										and tried our best to remain happy and present.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Irán Susá
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<span>
											First-Gen Computational Biology Student, Class of 2022
										</span>
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
										— As a first-generation college student, I wish it was
										emphasized to me that college classes would be full of
										people from all walks of life––of all ages and each with
										different levels of experience. It used to make me feel as
										though I didn't belong because I didn't "know enough" to
										engage in class discussions. Yet, this is one of the very
										things that inspired me to apply to college. I want to meet
										new people, challenge, and be challenged intellectually. To
										be in an environment that exudes creativity in perspective
										is exactly what I need to grow as an individual.
										<br /> <br /> I am only a freshman, but college has already
										taught me invaluable life skills, one of which being how to
										advocate for myself. In high school, everything was already
										set out for me, and I was content with my class schedules,
										balance between academic and extracurricular activities, and
										the financial aid I was receiving to attend. Going into a
										bigger institution, I had to arrange everything myself
										without the help of my parents. I had to reach out when I
										was uncomfortable and learn to take authority over my
										educational experience.
										<br /> <br /> I am hopeful of who I will become at USC as
										one of the first in my family to attend college. I am
										excited to meet the older version of myself and see her
										mentoring other first-generation college students younger
										than herself and to see her supporting the very community
										that has encouraged her to enter a world different than her
										own.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<span className="testimonial-item-name text-color-high">
										Angela Mendoza Ortega
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<span>First-Gen Music Student, Class of 2024</span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
