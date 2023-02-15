import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationBox.sass';

function InformationBox() {
  return (
    <section className='information-box'>
      <div className='info-card'>
        <AiFillPhone className='phone-icon' />
        <div>
          <h3>Telefone:</h3>
          <p>(94) 9999-9999</p>
        </div>
      </div>
      <div className='info-card'>
        <AiOutlineMail className='email-icon' />
        <div>
          <h3>E-mail:</h3>
          <p>teste@gmail.com</p>
        </div>
      </div>
      <div className='info-card'>
        <AiFillEnvironment className='map-icon' />
        <div>
          <h3>Localização:</h3>
          <p>Canãa dos Carajás / PA</p>
        </div>
      </div>
    </section>
  );
}

export default InformationBox;
