import { Link } from 'gatsby'
import React, { useState, useRef } from 'react'
import '../styles/duvidas.css'

export default function Duvidas() {
    const item1Height = useRef();
    const item2Height = useRef();
    const item3Height = useRef();
    const item4Height = useRef();
    const item5Height = useRef();
    const item6Height = useRef();
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
                            <div ref={item1Height} className='item-info' style={itemState === 'show1' ? { height: item1Height.current.scrollHeight} : {}}>
                                <p>O curso é totalmente online, sendo assim, você assiste todas as aulas do conforto da sua casa ou de onde você estiver, sem precisar sair e gastar com condução, lanches e perder tempo no trânsito!</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show2')}><i class="bi bi-caret-right-fill"></i>COMO FUNCIONA A GARANTIA?</button>
                            </li>
                            <div ref={item2Height} className='item-info' style={itemState === 'show2' ? { height: item2Height.current.scrollHeight} : {}}>
                                <p>Damos aos nossos alunos uma Garantia de 7 dias.</p>
                                <p>Se em qualquer momento dos próximos 7 dias você não tiver nenhum resultado, ou se você não estiver satisfeito, por qualquer motivo, apenas me avise que eu vou devolver TODO o seu dinheiro, sem nenhuma pergunta.</p>
                                <p>Eu criei essa garantia, porque sei que os meus treinamentos vão mudar completamente a sua vida e eu não quero que você perca a oportunidade de transformar radicalmente o sua situação financeira.</p>
                                <p>Estou te dando todas as garantias que eu posso, para você ter resultado fazendo meus treinamentos. Agora só falta você clicar no botão aqui embaixo para alcançar o faturamento dos seus sonhos!</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show3')}><i class="bi bi-caret-right-fill"></i>QUAIS AS FORMAS DE PAGAMENTO?</button>
                            </li>
                            <div ref={item3Height} className='item-info' style={itemState === 'show3' ? { height: item3Height.current.scrollHeight} : {}}>
                                <p>Aceitamos todos os tipos de pagamento, cartão de débito, todos os cartões de crédito podendo parcelar sua compra em até 12x e boleto bancário à vista.</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show4')}><i class="bi bi-caret-right-fill"></i>COMO VOU IMPORTAR IPHONE E OUTRAS COISAS SEM SER TAXADO?</button>
                            </li>
                            <div ref={item4Height} className='item-info' style={itemState === 'show4' ? { height: item4Height.current.scrollHeight} : {}}>
                                <p>Neste treinamento vamos te ensinar a escolher o frete correto para comprar Iphone ou qualquer outro produto. Existe uma modalidade de frete que os produtos não são taxados, nesta modalidade não tem pedido mínimo você pode comprar de 1 a 100 produtos, te dou 100% de certeza que vou te ensinar todo o passo a passo deste método incrível.</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show5')}><i class="bi bi-caret-right-fill"></i>QUAL É A PEGADINHA, POR QUE É TÃO BARATO ASSIM?</button>
                            </li>
                            <div ref={item5Height} className='item-info' style={itemState === 'show5' ? { height: item5Height.current.scrollHeight} : {}}>
                                <p>Sabemos que nosso treinamento tem capacidade para custar até mais de R$ 2.000 reais, até por que em uma única compra você já vai recuperar seu investimento todo em economia (Comparado aos preços do Brasil) e ainda lucrar, eu mesmo na compra de um Macbook economizei R$ 10.308 reais e mostro exatamente como eu fiz. Porém queremos fazer algo diferente, ajudar o máximo de pessoas a adquirir os produtos dos seus sonhos com preço justo.</p>
                            </div>
                            <li className='list-item'>
                                <button onClick={() => buttonHandle('show6')}><i class="bi bi-caret-right-fill"></i>QUANTO TEMPO TEREI ACESSO AO TREINAMENTO?</button>
                            </li>
                            <div ref={item6Height} className='item-info' style={itemState === 'show6' ? { height: item6Height.current.scrollHeight} : {}}>
                                <p>Fique tranquilo para estudar no seu tempo. O seu acesso será vitalício e sempre que tiver atualizações ou acréscimo de mais bônus você terá acesso total sem pagar nada a mais por isso.</p>
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
