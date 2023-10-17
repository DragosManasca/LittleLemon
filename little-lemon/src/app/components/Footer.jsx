import * as React from "react";
import FooterIcon from "../assets/images/footerIcon.png";
import { sm_facebook_icon as FacebookIcon } from "../widgets/SVGs/index";
import { sm_instagram_icon as InstagramIcon } from "../widgets/SVGs/index";
import { sm_twitter_icon as TwitterIcon } from "../widgets/SVGs/index";

const socialmediaLinks = [
  { icon: FacebookIcon, url: "https://facebook.com" },
  { icon: InstagramIcon, url: "https://instagram.com" },
  { icon: TwitterIcon, url: "https://twitter.com" },
];

export function Footer() {
  return (
    <footer className="footer">
      <section className="footer-description item">
        <img
          src={FooterIcon}
          className="footer-icon"
          alt="restaurant footer logo"
        />
        <section className="description">
          <h2>Doormant Navigation</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </section>
      </section>
      <section className="footer-contact item">
        <h2>Contact</h2>
        <p>Address: 252 W 26th St, Chicago, IL 60616</p>
        <p>Phone Number: 1 312 225 5535</p>
        <p>Email: littlelemon@email.com</p>
      </section>
      <section className="footer-media item">
        <h2>Social Media Links</h2>
        <div className="socials">
          {socialmediaLinks.map((item) => (
            <a href={item.url} key={item.url} className="media-link">
              <item.icon />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
