import React from 'react'
import MainButton from './MainButton'
import { useInView } from 'react-intersection-observer';
import '../styles/passoAPasso.css'

export default function PassoAPasso() {
    const [entenda, entendaView] = useInView();
    const [ajudar, ajudarView] = useInView();

    return (
        <div className='wrapper-passo-a-passo'>
            <div className="container-xl pt-5">
                <div className="row">
                    <div ref={entenda} className={entendaView ? 'show' : 'from-left'}>
                        <h1>ENTENDA O PASSO A PASSO PARA VENDER SEM ESTOQUE!</h1>
                    </div>
                    <div className="col-md-6 col-xl-3 my-2 my-xl-0">
                        <div className="passo-card">
                            <i class="bi bi-cash-coin"></i>
                            <h2>VENDA PARA O CLIENTE</h2>
                            <p>Você coloca o produto à venda</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 my-2 my-xl-0">
                        <div className="passo-card">
                            <i class="bi bi-cart-fill"></i>
                            <h2>EFETIVAÇÃO DE COMPRA</h2>
                            <p>O cliente compra de você</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 my-2 my-xl-0">
                        <div className="passo-card">
                            <i class="bi bi-truck"></i>
                            <h2>FORNECEDOR</h2>
                            <p>Você repassa o pedido para o fornecedor</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 my-2 my-xl-0">
                        <div className="passo-card">
                            <i class="bi bi-airplane-fill"></i>
                            <h2>FRETE + ENVIO</h2>
                            <p>O fornecedor envia diretamente para o seu cliente</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-4 justify-content-center">
                    <div className="col-md-8 ajuda">
                        <div ref={ajudar} className={ajudarView ? 'from-left show' : 'from-left'}>
                            <h3>COMO O DROPSHIPPING VAI ME AJUDAR?</h3>
                        </div>
                        <p>Este treinamento é o jeito mais simples, rápido e prático, que vai te ajudar a conquistar tudo que você sempre sonhou.</p>
                        <p>Através dele você vai ter a oportunidade de ser o dono do seu próprio negócio lucrativo, sem precisar sair de casa, sem precisar contratar mão de obra e principalmente sem precisar investir.</p>
                        <p>Imagine ganhar até R$ 15.000,00 por mês, investindo pouco ou nenhum dinheiro?</p>
                        <p>Nós iremos te entregar todo o passo a passo completo que vai fazer isso acontecer na sua vida.</p>
                        <div>
                            <MainButton buttonText='VOU VIVER DE DROPSHIPPING E VENDER TODO DIA' />
                        </div>
                    </div>
                    <div className="col-9 col-md-4">
                        <img className='img-fluid' src="/images/money-flower.png" alt="money flower" />
                    </div>
                </div>
            </div>
        </div>
    )
}
