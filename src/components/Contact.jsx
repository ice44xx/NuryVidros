import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="container-contact" id = "contact">
            <div className="container-right">
                <div className="container-left">
                    <img src = '../public/img/logo/logo-form.png' alt="Nury Vidros-logo" className='logo-icon' />
                    <h1>Garanta já os serviços da <span>melhor vidraçaria</span> de ósorio!</h1>
                    <p className='desktop'>Preencha os dados ao <span>lado</span> para entrarmos em contato.</p>
                    <img src="../public/img/logo/arrow.png" alt="flecha apontando pro lado" className='arrow' />
                    <p className='mobile'>Preencha os dados <span>abaixo</span> para entrarmos em contato.</p>
                </div>

                <form action="https://formsubmit.co/nuryvidros@gmail.com" method="POST">
                    <div class="input-group">
                        <input type="text" required id = 'name' name = 'name' className='input' />
                        <label htmlFor="name" for class="placeholder">Nome:</label>    
                    </div>
                    <div class="input-group">
                        <input type="tel" required id = 'phone' name = 'phone' className='input' />
                        <label htmlFor="phone" class="placeholder">Telefone:</label>    
                    </div>
                    <div class="input-group">
                        <input type="text" required id = 'city' name = 'city' className='input' />
                        <label htmlFor="city" class="placeholder">Cidade:</label>    
                    </div>
                    <div class="input-group">
                        <textarea id = 'message' required name = 'message' rows = '4' className='input' />
                        <label htmlFor="message" class="placeholder">Mensagem:</label>    
                    </div>
                    <button type = 'submit'>RECEBER ORÇAMENTO</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact