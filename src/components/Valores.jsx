import React from 'react'
import '../styles/valores.css'
import { Link } from 'gatsby'

export default function Valores() {
    return (
        <div>
            <div className='wrapper-valores mt-3'>
                <div className="container-xl">
                    <h1>QUAIS SÃO OS VALORES?</h1>
                    <p>Geralmente você pagaria em média R$1000,00 a R$2000,00 para ter um treinamento parecido. Ou seja, você terá os mesmos benefícios por um valor justo, porém por tempo limitadíssimo.</p>
                    <p>O Valor atual do curso é referente ao lançamento do mesmo.</p>
                    <p>A minha missão é poder levar liberdade financeira e geográfica através do dropshipping para os brasileiros, enfrentamos crises demais e agora está na hora de criarmos um caminho lucrativo. Aproveite e invista no seu conhecimento.</p>
                </div>
            </div>
            <div className="wrapper-forma-pgto">
                <div className="container-xl mt-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 col-lg-5 beneficios">
                            <p><i class="bi bi-check-circle-fill"></i>Acesso vitálicio</p>
                            <p><i class="bi bi-check-circle-fill"></i>Método validado e lucrativo</p>
                            <p><i class="bi bi-check-circle-fill"></i>Milhares de alunos</p>
                            <p><i class="bi bi-check-circle-fill"></i>100% seguro contra perca de estoque</p>
                            <p><i class="bi bi-check-circle-fill"></i>Valor acessível</p>
                            <p><i class="bi bi-check-circle-fill"></i>Atualizado com as tendências de mercado</p>
                            <p><i class="bi bi-check-circle-fill"></i>Possibilita ter seu próprio negócio</p>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="pgto-card">
                                <h2>LEMBRANDO QUE ADQUIRINDO AQUI E AGORA VOCÊ RECEBERÁ 03 BÔNUS QUE JUNTOS TOTALIZAM R$360,00</h2>
                                <h3>APENAS 07X DE</h3>
                                <h4>R$9,57</h4>
                                <h5>OU R$67,00 À VISTA</h5>
                                <Link to='/'>CLIQUE AQUI E COMPRE AGORA!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
