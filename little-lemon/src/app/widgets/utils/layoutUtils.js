import { sm_facebook_icon as FacebookIcon } from "../SVGs/index";
import { sm_instagram_icon as InstagramIcon } from "../SVGs/index";
import { sm_twitter_icon as TwitterIcon } from "../SVGs/index";

export const getSocialMediaLinks = () => {
  const socialmediaLinks = [
    { icon: FacebookIcon, url: "https://facebook.com" },
    { icon: InstagramIcon, url: "https://instagram.com" },
    { icon: TwitterIcon, url: "https://twitter.com" },
  ];

  return socialmediaLinks;
};

export const smoothScrollToElement = (id) => {
  const element = document.getElementById(id);

  element && window.scroll({ top: element.offsetTop, behavior: "smooth" });
};
