import React from 'react'
import '../styles/contact.css';
import instagram from '../img/instagram.svg';
import gitHub from '../img/gitHub.svg';
import linkedIn from '../img/linkedIn.svg';
import twitter from '../img/twitter.svg';
import spotify from '../img/spotify.svg';
import { send, init } from 'emailjs-com';

init('user_mdrJJlYqofmzWIFqxmIws');


const Contact = () => {
  const initialState = {
    from_name: '',
    to_name: 'Alberto',
    message: '',
    reply_to: '',
  }

  const [toSend, setToSend] = React.useState(initialState);

  const onSubmit = (e) => {
    init("user_mdrJJlYqofmzWIFqxmIws");
    e.preventDefault();

    console.log('entrei');
    if (toSend.from_name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    if (toSend.reply_to.trim() === '') {
      alert('Please enter your email');
      return;
    }
    if (toSend.message.trim() === '') {
      alert('Please enter your message');
      return;
    }
  
    send(
      'alberto_id',
      'template_ou98d82',
      toSend,
      'user_mdrJJlYqofmzWIFqxmIws'
    )
      .then(() => {
        alert('Your message has been sent!');
        setToSend(initialState);
      })
      .catch(() => {
        alert('An error has occurred');
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <main className="main-contact">
      <form onSubmit={onSubmit} className="form-contact">
        <h1 className="title-contact"><span className="c-tertiary">Entre em</span> contato</h1>
        <input
          type="text"
          name="from_name"
          placeholder="Seu nome"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          rows="6"
          placeholder="Sua Mensagem"
          maxlength="500"
          value={ toSend.message }
          onChange={ handleChange }
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Seu email"
          value={ toSend.reply_to }
          onChange={ handleChange }
        />
        <button type="submit" onClick={ onSubmit }> 
          Enviar
        </button>
      </form>
      {/* animação de redes sociais usando base https://code-architects.github.io/social-media-icons/ */}
      <div class="wrapper">
          <div class="socialicons">
              <a 
                href="https://github.com/albertoscandido"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                class="icon"
              >
                <img
                  src={ gitHub }
                  alt="GitHub" 
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/albertocandido/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                class="icon"
              >
                <img
                  src={ linkedIn }
                  alt="LinkedIn"
                />
              </a>
              <a 
                href="https://www.instagram.com/albertocandido98/"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                class="icon"
              >
                <img
                  src={ instagram }
                  alt="Instagram"
                />
              </a>
              <a 
                href="https://twitter.com/albertocas98"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
                class="icon"
              >
                <img
                  src={ twitter }
                  alt="twitter"
                />
              </a>
              <a 
                href="https://open.spotify.com/user/tkfegmfvpa0d6wh8k8br4o8vv?si=7c6307506d854d71"
                target="_blank"
                rel="noreferrer"
                title="Spotify"
                class="icon"
              >
                <img
                  src={ spotify }
                  alt="spotify"
                />
              </a>
          </div>
      </div>
    </main>
  );
}

export default Contact;
