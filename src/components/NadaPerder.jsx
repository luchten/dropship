import React from 'react'
import '../styles/nadaPerder.css'
import { useInView } from 'react-intersection-observer'

export default function NadaPerder() {
    const [preocupe, preocupeView] = useInView();
    return (
        <div className='wrapper-nada-perder mt-5 py-5'>
            <div className="container-xl">
                <div ref={preocupe} className={preocupeView ? 'show' : 'from-left'}>
                    <h1>NÃO SE PREOCUPE, VOCÊ NÃO TEM NADA A PERDER!</h1>
                </div>
                <p>Eu realmente quero fazer a diferença na sua vida, sendo assim, não posso deixar que você saia desta página sem dar o primeiro passo que vai transformar a sua jornada. Por isso estou te oferecendo uma garantia incondicional de 7 dias, eu quero que você veja com os seus próprios olhos o poder do curso, e caso você ache que ele não vai te ajudar (o que eu acho difícil, já que este curso está mudando a vida de milhares de pessoas), mas não tem problema, é só nos avisar, que devolveremos todo o seu dinheiro sem te perguntar nada.</p>
                <div className="row pt-2 text-center footer">
                    <div className="col-md-4 my-2">
                        Evolua Dropship © 2022 - Todos os direitos reservados
                    </div>
                    <div className="col-md-4 my-2">
                        Suporte - suporte@evoluadropship.com
                    </div>
                    <div className="col-md-4 my-2">
                        O acesso ao curso será enviado para o seu e-mail usado no ato da compra assim que o pagamento for confirmado.
                    </div>
                </div>
            </div>
        </div>
    )
}
