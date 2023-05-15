import React from 'react'
import MainButton from './MainButton'
import '../styles/modulos.css'

export default function Modulos() {
  return (
    <div className='wrapper-modulos'>
      <div className="container-xl mt-5 pt-5 text-center">
        <div className='text-center'>
          <h1>VEJA EM DETALHES OS MÓDULOS DO CURSO</h1>
          <i class="bi bi-caret-down-fill"></i>
        </div>
        <div className="row my-lg-3 justify-content-center">
          <div className="col-lg-4 my-2 my-lg-0">
            <div className="modulo-card">
              <h2>MÓDULO 01</h2>
              <h3>IMPORTAÇÃO DO EUA</h3>
              <p>Neste módulo vamos ensinar todo o passo a passo de como importar dos EUA pelo frete aéreo sem tributação e pelo frete tradicional.</p>
            </div>
          </div>
          <div className="col-lg-4 my-2 my-lg-0">
            <div className="modulo-card">
              <h2>MÓDULO 02</h2>
              <h3>O QUE É DROPSHIPPING</h3>
              <p>Entenda e aprenda todo o passo a passo da operação Dropshipping nacional e internacional.</p>
            </div>
          </div>
        </div>
        <div className="row my-lg-3 justify-content-center">
          <div className="col-lg-4 my-2 my-lg-0">
            <div className="modulo-card">
              <h2>MÓDULO 03</h2>
              <h3>IMPORTAÇÃO DO EUA</h3>
              <p>Neste módulo vamos ensinar todo o passo a passo de como importar dos EUA pelo frete aéreo sem tributação e pelo frete tradicional.</p>
            </div>
          </div>
          <div className="col-lg-4 my-2 my-lg-0">
            <div className="modulo-card">
              <h2>MÓDULO 04</h2>
              <h3>O QUE É DROPSHIPPING</h3>
              <p>Entenda e aprenda todo o passo a passo da operação Dropshipping nacional e internacional.</p>
            </div>
          </div>
        </div>
        <div className="row my-lg-3 justify-content-center">
          <div className="col-lg-4 my-2 my-lg-0">
            <div className="modulo-card">
              <h2>MÓDULO 05</h2>
              <h3>IMPORTAÇÃO DO EUA</h3>
              <p>Neste módulo vamos ensinar todo o passo a passo de como importar dos EUA pelo frete aéreo sem tributação e pelo frete tradicional.</p>
            </div>
          </div>
          <div className="col-lg-4 my-2 my-lg-0 mb-3">
            <div className="modulo-card">
              <h2>MÓDULO 06</h2>
              <h3>O QUE É DROPSHIPPING</h3>
              <p>Entenda e aprenda todo o passo a passo da operação Dropshipping nacional e internacional.</p>
            </div>
          </div>
        </div>
        <MainButton buttonText='VOU VIVER DE DROPSHIPPING E VENDER TODO DIA!' />
      </div>
    </div>
  )
}
