import React from 'react'
import MainButton from './MainButton'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer'
import '../styles/import.css'

export default function Importe() {
    const [importe, importeView] = useInView();
    const [vaiter, vaiterView] = useInView();
    const [veja, vejaView] = useInView();
    return (
        <div className='wrapper-import'>
            <div className="container-xl my-5 pb-4 text-center">
                <div ref={importe} className={importeView ? 'show' : 'from-left'}>
                    <h2>IMPORTE PRODUTOS COMO ESTES, PAGANDO UM VALOR JUSTO!</h2>
                    <h3>SEM CORRER RISCOS DE PAGAR TAXAS.</h3>
                </div>
                <div className="row px-5 align-items-center justify-content-center">
                    <div className="col-md-5 col-lg-3 p-4">
                        <img className='img-fluid' src="/images/watch.jfif" alt="" />
                    </div>
                    <div className="col-md-5 col-lg-3 p-4">
                        <img className='img-fluid' src="/images/notebook.png" alt="" />
                    </div>
                    <div className="col-md-5 col-lg-3 p-4">
                        <img className='img-fluid' src="/images/cell.jpg" alt="" />
                    </div>
                    <div className="col-md-5 col-lg-3 p-4">
                        <img className='img-fluid' src="/images/earphone.jpg" alt="" />
                    </div>
                </div>
                <MainButton buttonText='QUERO GANHAR DINHEIRO COM ISSO' />
                <div ref={vaiter} className={vaiterView ? 'show' : 'from-left'}>
                    <h1>VOCÊ VAI TER EM MÃOS UMA LISTA COM OS 600 MELHORES CONTATOS DE:</h1>
                </div>
                <div className="row contatos text-start align-items-center justify-content-center">
                    <div className="col-md-8">
                        <p>FORNECEDORES DE ELETRÔNICOS</p>
                        <p>FORNECEDORES DE ROUPAS MASCULINA</p>
                        <p>FORNECEDORES DE ROUPAS FEMININA</p>
                        <p>FORNECEDORES DE PRODUTO APPLE</p>
                        <p>FORNECEDORES PARA DROPSHIPPING NO MERCADO LIVRE</p>
                        <p>FORNECEDORES DE CALÇADOS</p>
                        <p>FORNECEDORES DE RELÓGIOS</p>
                        <p>FORNECEDORES DE BOLSAS</p>
                    </div>
                    <div className="col-8 col-md-4">
                        <img className='img-fluid' src="/images/carrinho-contatos.png" alt="" />
                    </div>
                </div>
                <MainButton buttonText='FALE COM OS MELHORES FORNECEDORES' />
                <div ref={veja} className={vejaView ? 'show' : 'from-left'}>
                    <h1>VEJA QUEM JÁ APLICOU O FÓRMULA DROPSHIPPING:</h1>
                </div>
                <h4>SE ELAS CONSEGUIRAM ATINGIR OS RESULTADOS VOCÊ TAMBÉM PODE, NÓS ESTAREMOS DO SEU LADO.</h4>
                <div className="row formula">
                    <div className="col-md-4 my-3">
                        <ReactPlayer
                            url='https://vimeo.com/740497077'
                            controls='true'
                            width='auto'
                            height='300px'
                        />

                    </div>
                    <div className="col-md-4 my-3">
                        <ReactPlayer
                            url='https://vimeo.com/740497955'
                            controls='true'
                            width='auto'
                            height='300px'
                        />

                    </div>
                    <div className="col-md-4 my-3">
                        <ReactPlayer
                            url='https://vimeo.com/740498704'
                            controls='true'
                            width='auto'
                            height='300px'
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
