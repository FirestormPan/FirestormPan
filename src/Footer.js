import React, { useEffect } from 'react';
import twitterIcon from './icons/twitter-brands.svg';
import './footer.css';


const Footer = () => {

    /*εχω ενα σκριπτακι στο index.html που βοηβθαει να εχω τα εικονιδια. */

    return ( 
        <footer>
        <hr />
        <br />
        <div 
         className="footerdiv"
        >
          <div>&copy; Pan WebEntertainment</div>
          <div className="rounded-social-buttons">
            <a
              className="social-button instagram"
              href="https://www.instagram.com/"
              target="_blank"
              ><i className="fab fa-instagram"></i
            ></a>
            <a
              className="social-button google"
              href="https://www.google.com/"
              target="_blank"
              ><i className="fab fa-google"></i
            ></a>
            <a
              className="social-button twitter"
              href="https://www.twitter.com/"
              target="_blank"
              ><img src={twitterIcon} className="twitIcon"></img>
            </a>
            <a
              className="social-button linkedin"
              href="https://www.linkedin.com/"
              target="_blank"
              ><i className="fab fa-linkedin"></i
            ></a>
            <a
              className="social-button youtube"
              href="https://www.youtube.com/"
              target="_blank"
              ><i className="fab fa-youtube"></i
            ></a>
          </div>
          <div>&copy; Pan WebEntertainment</div>
        </div>
        <br />
      </footer>
     );
}
 
export default Footer;