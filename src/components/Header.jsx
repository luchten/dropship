import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/header.css'
import MainButton from './MainButton'

export default function Header() {
    return (
        <div className='header-wrapper'>
            <div className="container-xl">
                <h1>VENDA ENTRE R$3.000,00 ATÉ R$15.000,00 SEM INVESTIR</h1>
                <h1>NADA EM ESTOQUE!</h1>
                <p>TUDO QUE VOCÊ PRECISA PARA COMEÇAR ESTÁ AQUI!</p>
                <ReactPlayer
                    url='https://vimeo.com/740497077'
                    controls='true'
                    height='450px'
                    width='auto'
                />
                <img className='img-fluid' src="/images/pagamento.png" alt="" />
                <div>
                    <MainButton buttonText='QUERO APRENDER A VENDER TODOS OS DIAS DA SEMANA' />
                </div>
            </div>
        </div>
    )
}
