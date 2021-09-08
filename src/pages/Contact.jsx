import React from 'react'
// import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = React.useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    // send(
    //   'SERVICE ID',
    //   'TEMPLATE ID',
    //   toSend,
    //   'User ID'
    // )
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log('FAILED...', err);
    //   });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <main>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="from_name"
        placeholder="Seu nome"
        value={toSend.from_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Sua Mensagem"
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
      <button type="submit"> 
        Enviar
      </button>
    </form>
    </main>
  );
}

export default Contact;
