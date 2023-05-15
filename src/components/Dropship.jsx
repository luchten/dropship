import React from 'react'
import { useInView } from 'react-intersection-observer';
import '../styles/dropship.css'

export default function Dropship() {
    const [proporciona, proporcionaView] = useInView();
    return (
        <div className='wrapper-dropship'>
            <div className="container-xl">
                <div className="row my-4 dropship align-items-center justify-content-center">
                    <div className="col-6 col-md-4">
                        <img className='img-fluid' src="/images/dropship-banner.png" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div ref={proporciona} className={proporcionaView ? 'show' : 'from-left'}>
                            <h1>DROPSHIPPING PROPORCIONA:</h1>
                        </div>
                        <p>Liberdade Financeira:<br />Você será o próprio regente da sua vida financeira, e vai conseguir conquistar tudo que você sempre desejou.</p>
                        <p>Liberdade de tempo:<br />Você vai poder fazer o seu próprio horário, pois a sua maquina de vendas sempre estará trabalhando para você.</p>
                        <p>Liberdade geográfica:<br />Você vai poder trabalhar onde quiser, basta ter um celular ou computador com conexão na internet.</p>
                    </div>
                </div>
                <div className="row gx-5 mt-5 obrigatorio">
                    <h1>O CURSO É OBRIGATÓRIO PARA VOCÊ QUE QUER:</h1>
                    <div className="col-md-6 col-lg-3 my-3 my-lg-0">
                        <div className='obrigatorio-card'>
                            <img className='img-fluid' src="/images/fonte-renda.png" alt="" />
                            <h3>UMA NOVA FONTE DE RENDA</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-3 my-lg-0">
                        <div className='obrigatorio-card'>
                            <img className='img-fluid' src="/images/sem-investir.png" alt="" />
                            <h3>TRABALHAR SEM INVESTIR EM ESTOQUE</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-3 my-lg-0">
                        <div className='obrigatorio-card'>
                            <img className='img-fluid' src="/images/proprio-chefe.png" alt="" />
                            <h3>SER SEU PRÓPRIO CHEFE</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 my-3 my-lg-0">
                        <div className='obrigatorio-card'>
                            <img className='img-fluid' src="/images/alavancar.png" alt="" />
                            <h3>ALAVANCAR SEUS NEGÓCIOS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
