import { Link } from 'gatsby'
import React, { useState } from 'react'
import '../styles/duvidas.css'

export default function Duvidas() {
    const [itemState, setItemState] = useState('');
    const buttonHandle = (args) => {
        switch (args) {
            case 'show1':
                if (itemState === 'show1') setItemState('')
                else setItemState('show1');
                break;
            case 'show2':
                if (itemState === 'show2') setItemState('')
                else setItemState('show2');
                break;
            case 'show3':
                if (itemState === 'show3') setItemState('')
                else setItemState('show3');
                break;
            case 'show4':
                if (itemState === 'show4') setItemState('')
                else setItemState('show4');
                break;
            case 'show5':
                if (itemState === 'show5') setItemState('')
                else setItemState('show5');
                break;
            case 'show6':
                if (itemState === 'show6') setItemState('')
                else setItemState('show6');
                break;
            default: setItemState('');
        }
    }
    return (
        <div className='wrapper-duvidas'>
            <div className="container-xl mt-5">
                <div className="row justify-content-center">
                    <div className='col-lg-8 text-center'>
                        <h1>DÚVIDAS FREQUENTES</h1>
                        <ul class="categorias">
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show1')}><i class="bi bi-caret-right-fill"></i>O CURSO É PRESENCIAL OU ON-LINE?</button>
                            </li>
                            <div class={itemState === 'show1' ? 'item-info item-show' : 'item-info'}>
                                <p>O segmento de mercado de eletrodomésticos sempre foi bastante forte online, com produtos
                                    padronizados e relativamente fáceis de comparar, além do seu alto valor agregado e sua
                                    longa duração. São, por exemplo, os principais produtos de uso diário, como máquinas de
                                    lavar, lava-louças, geladeiras ou máquinas de lavar e secar.</p>
                                <p>A venda online de pequenos eletrodomésticos como máquinas de café, máquinas de expresso,
                                    processadores de alimentos, micro-ondas e aspiradores de pó também pertencem a este
                                    segmento de mercado. O comércio online de eletrodomésticos, no entanto, impõe desafios
                                    importantes como a logística, gerenciamento de garantias e devoluções.</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show2')}><i class="bi bi-caret-right-fill"></i>COMO FUNCIONA A GARANTIA?</button>
                            </li>
                            <div class={itemState === 'show2' ? 'item-info item-show' : 'item-info'}>
                                <p>O setor de bens de consumo sempre cativou o interesse do consumidor online porque é fácil de
                                    transportar, geralmente bastante durável e também é algo que as pessoas consomem
                                    regularmente, portanto, modelos de negócios que incluem compras repetidas funcionam muito
                                    bem com esta categoria.</p>
                                <p>ACCT construiu sistemas digitais para empresas gigantes como Unilever e Ab-Inbev. O
                                    desenvolvimento de soluções para esse setor deve levar em consideração algumas
                                    particularidades como capilaridade e rapidez na entrega, recorrência e disponibilidade de
                                    estoque.</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show3')}><i class="bi bi-caret-right-fill"></i>QUAIS AS FORMAS DE PAGAMENTO?</button>
                            </li>
                            <div class={itemState === 'show3' ? 'item-info item-show' : 'item-info'}>
                                <p>Eletrônicos é um dos segmentos mais maduros no comércio online, com receita global total de
                                    $424,9 bilhões (2019), de acordo com o Statista. Prevemos que o mercado global de e-commerce
                                    de eletrônicos manterá uma taxa composta de crescimento anual pelos próximos anos.</p>
                                <p>Por isso, aqui na ACCT, implantamos e evoluímos as soluções digitais para grandes clientes do
                                    segmento, como Samsung e Motorola.</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show4')}><i class="bi bi-caret-right-fill"></i>COMO VOU IMPORTAR IPHONE E OUTRAS COISAS SEM SER TAXADO?</button>
                            </li>
                            <div class={itemState === 'show4' ? 'item-info item-show' : 'item-info'}>
                                <p>De acordo com o Statista, o segmento de Moda é um dos maiores do mercado de e-commerce B2C e
                                    seu tamanho global foi estimado em $528,1 bilhões em 2019. O mercado deve crescer ainda mais
                                    12,2% ao ano e atingir um tamanho de mercado total de $829,6 bilhões até o final de 2024.
                                </p>
                                <p>Os compradores online de moda usam a Internet para descobrir tendências e oportunidades de
                                    compra, seja personalizando itens ou deslizando por uma interface simples em dispositivos
                                    móveis.</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show5')}><i class="bi bi-caret-right-fill"></i>QUAL É A PEGADINHA, POR QUE É TÃO BARATO ASSIM?</button>
                            </li>
                            <div class={itemState === 'show5' ? 'item-info item-show' : 'item-info'}>
                                <p>As vendas online de móveis para casa e jardim estão crescendo a uma taxa de 11,9% e devem
                                    atingir um valor de mercado de $294 bilhões até o final de 2022 (Statista). É claro que as
                                    marcas estão se distanciando do que antes eram armazéns e aproveitando cada vez mais as
                                    oportunidades de possuir uma presença online omnichannel.</p>
                                <p>Além disso, de acordo com uma pesquisa da Forrester, os utensílios domésticos devem
                                    ultrapassar os computadores como a terceira maior categoria de produtos no mercado de varejo
                                    até o final de 2020, fazendo com que o setor online exploda nos próximos anos.</p>
                                <p>A Tok&Stok, uma das maiores varejistas de móveis do Brasil, está se movendo mais rapidamente
                                    com a ACCT, frequentemente lançando novos recursos e experiências online para seus clientes.
                                </p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show6')}><i class="bi bi-caret-right-fill"></i>QUANTO TEMPO TEREI ACESSO AO TREINAMENTO?</button>
                            </li>
                            <div class={itemState === 'show6' ? 'item-info item-show' : 'item-info'}>
                                <p>Acreditamos que a tecnologia está trazendo conveniência e transformando a experiência de
                                    compra de bebidas e alimentos. Também acreditamos que nos próximos 10 anos este mercado irá
                                    se tornar cada vez mais digital, mais rápido do que qualquer outro setor. À medida que os
                                    compradores de alimentos em canais online aumentam, especialmente à medida que as gerações
                                    mais jovens se tornam compradores principais, os comerciantes vêm apostando na estratégia de
                                    criar experiências dentro do e-commerce com foco em desenvolver e manter a marca e sua
                                    participação no mercado.</p>
                                <p>Carrefour Brasil, SMU do Chile e Ametller Origen de Barcelona escolheram a ACCT para
                                    desenvolver uma nova infraestrutura de e-commerce.</p>
                            </div>
                        </ul>
                    </div>
                    <div className="row mt-4 ">
                        <div className="col text-center">
                            <Link to='/'>TIRE SUAS DÚVIDAS CONOSCO.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
