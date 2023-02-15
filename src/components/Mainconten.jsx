import ProjectsContainer from './ProjectsContainer';
import AboutContainer from './AboutContainer';
import TecsContainer from './TecsContainer';

import '../styles/components/maincontent.sass';

function Maincontent() {
  return (
    <main className='main-container'>
      <AboutContainer />
      <TecsContainer />
      <ProjectsContainer />
    </main>
  );
}

export default Maincontent;
