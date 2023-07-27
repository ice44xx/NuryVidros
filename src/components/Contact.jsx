import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

const Contact = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('Nome:', name);
      formData.append('Cidade:', city);
      formData.append('Telefone:', phone);
      formData.append('Mensagem:', message);
  
      try {
        const response = await fetch('https://formspree.io/f/xyyanwya', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        });
  
        if (response.status === 200) {
          Swal.fire({
            title: 'Mensagem enviada com sucesso!',
            text: 'Obrigado, entraremos em contato o mais breve possível.',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          setName('');
          setCity('');
          setPhone('');
          setMessage('');
        } else {
          Swal.fire({
            title: 'Opss, algo deu errado',
            text: 'Algo deu errado, tente novamente ou entre em contato mais tarde.',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };
    

  return (
    <>
        <div className="container-contact" id = "contact">
            <div className="container-right">
                <div className="container-left">
                    <img src = '/img/logo/logo-form.png' alt="Nury Vidros-logo" className='logo-icon' />
                    <h1>Garanta já os serviços da <span>melhor vidraçaria</span> de ósorio!</h1>
                    <p className='desktop'>Preencha os dados ao <span>lado</span> para entrarmos em contato.</p>
                    <img src="/img/logo/arrow.png" alt="flecha apontando pro lado" className='arrow' />
                    <p className='mobile'>Preencha os dados <span>abaixo</span> para entrarmos em contato.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name" id ='placeholder'>Nome:</label> 
                        <input type="text" required id = 'name' name = 'name' value={name} placeholder = 'Digite seu nome' onChange={(event) => setName(event.target.value)}  className='input' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="phone">Telefone:</label>    
                        <InputMask  type="tel" required id = 'phone' mask="(99) 9999-9999" placeholder='(99) 99999-9999' name = 'phone' value={phone} onChange={(event) => setPhone(event.target.value)}  className='input' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="city">Cidade:</label>   
                        <input type="text" required id = 'city' name = 'city' placeholder='Digite sua cidade' value={city} onChange={(event) => setCity(event.target.value)} className='input' /> 
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Mensagem:</label> 
                        <textarea id = 'message' required name = 'message' value={message} placeholder = 'Deixe sua mensagem aqui...' onChange={(event) => setMessage(event.target.value)} rows = '4' /> 
                    </div>

                    <button type = 'submit'>RECEBER ORÇAMENTO</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact