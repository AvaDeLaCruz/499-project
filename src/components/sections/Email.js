import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import emailjs from 'emailjs-com';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

export default function Email() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_48k32ei', 'template_9aw2rdj', e.target, 'user_uxuv0LmXVEoebExmFqlzo')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="to_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form>
  );
}

// const Email = ({
//   className,
//   topOuterDivider,
//   bottomOuterDivider,
//   topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   split,
//   ...props
// }) => {

//   const outerClasses = classNames(
//     'cta section center-content-mobile reveal-from-bottom',
//     topOuterDivider && 'has-top-divider',
//     bottomOuterDivider && 'has-bottom-divider',
//     hasBgColor && 'has-bg-color',
//     invertColor && 'invert-color',
//     className
//   );

//   const innerClasses = classNames(
//     'cta-inner section-inner',
//     topDivider && 'has-top-divider',
//     bottomDivider && 'has-bottom-divider',
//     split && 'cta-split'
//   );  

  
//   return (
//     <section
//       {...props}
//       className={outerClasses}
//     >
//       <div className="container">
//         <div
//           className={innerClasses}
//         >
//           <div className="cta-slogan">
//             <h3 className="m-0">
//               Want an email reminder to come back to our site?
//             </h3>
//           </div>
//           <div className="cta-action">
//             <form>
//               <Input id="newsletter" type="email" hasIcon="right" placeholder="Your best email" required>
//                 <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
//                 </svg>
//               </Input>
//               <Input type="button" value="Submit" className="button button-primary button-wide-mobile button-sm" onClick={handleSubmit} />
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// Email.propTypes = propTypes;
// Email.defaultProps = defaultProps;

// export default Email;