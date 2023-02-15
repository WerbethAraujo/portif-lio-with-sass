import SocialIcons from './SocialIcons';
import InformationBox from './InformationBox';

import Avatar from '../img/avatar.png';

import '../styles/components/sidebar.sass';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <img src={Avatar} alt='avatar' />
      <p className='title'>Programador</p>
      <SocialIcons />
      <InformationBox />
      <a href='#' className='btn'>
        Ver Currículo
      </a>
    </aside>
  );
}

export default Sidebar;
