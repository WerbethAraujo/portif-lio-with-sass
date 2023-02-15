import '../styles/components/socialIcons.sass';

import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const socialIcons = [
  { name: 'linkedin', icon: <AiFillLinkedin /> },
  { name: 'github', icon: <AiFillGithub /> },
  { name: 'instagram', icon: <AiOutlineInstagram /> },
];

function SocialIcons() {
  return (
    <section className='social-medias'>
      {socialIcons.map((media) => (
        <a href='#' className='social-icon' id={media.name} key={media.name}>
          {media.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialIcons;
