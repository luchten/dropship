import React from 'react'
import '../styles/adquirindo.css'
import { Link } from 'gatsby'

export default function Adquirindo() {
  return (
    <div className='wrapper-adquirindo'>
        <h1>ADQUIRINDO O CURSO VOCÊ RECEBERÁ DE GRAÇA:</h1>
        <div className="container-xl mt-4 px-5">            
            <div className="row adquirindo-card">
                <div className="col-md-3">
                    <img className='img-fluid' src="/images/eua.png" alt="" />
                </div>
                <div className="col-md-9">
                    <h2>REDIRECIONADOR DOS EUA</h2>
                    <h3>REDIRECIONADOR DE CONFIANÇA</h3>
                    <p>DE <span className='traco'>R$ 87,00</span></p>
                    <Link className='gratis-button' to='/'>GRATIS</Link>
                </div>
            </div>
            <div className="row my-3 adquirindo-card">
                <div className="col-md-3">
                    <img className='img-fluid' src="/images/600.png" alt="" />
                </div>
                <div className="col-md-9">
                    <h2>600 FORNECEDORES</h2>
                    <h3>LISTA DE FORNECEDOR NACIONAL E INTERNACIONAL</h3>
                    <p>DE <span className='traco'>R$ 197,00</span></p>
                    <Link className='gratis-button' to='/'>GRATIS</Link>
                </div>
            </div>
            <div className="row adquirindo-card">
                <div className="col-md-3">
                    <img className='img-fluid' src="/images/china.png" alt="" />
                </div>
                <div className="col-md-9">
                    <h2>FORNECEDORES CHINESES</h2>
                    <h3>COMO ENCONTRAR PRODUTOS QUE CHEGAM EM 12 DIAS DA CHINA</h3>
                    <p>DE <span className='traco'>R$ 77,00</span></p>
                    <Link className='gratis-button' to='/'>GRATIS</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
