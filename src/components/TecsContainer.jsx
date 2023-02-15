import {
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiMysql,
  DiSass,
} from 'react-icons/di';

import '../styles/components/techs.sass';

const techsIcons = [
  { name: 'HTML5', icon: <DiHtml5 /> },
  { name: 'CSS3', icon: <DiCss3 /> },
  { name: 'Node', icon: <DiNodejsSmall /> },
  { name: 'React', icon: <DiReact /> },
  { name: 'MySql', icon: <DiMysql /> },
  { name: 'Sass', icon: <DiSass /> },
];

function TecsContainer() {
  return (
    <section className='techs-container'>
      <h2>Tecs</h2>
      <div className='techs-grid'>
        {techsIcons.map((tech) => (
          <div className='tech-card' id={tech.name} key={tech.name}>
            {tech.icon}
            <div className='tech-info'>
              <h3>{tech.name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                praesentium optio.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TecsContainer;
