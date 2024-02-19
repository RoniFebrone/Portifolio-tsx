
import './index.scss'

import Card from '../../Components/Card/Card'


import CCXP from '../../images/imgProjects/CCXP.svg'
import Byecar from '../../images/imgProjects/Byecar.svg'
import Deliveryeasy from '../../images/imgProjects/Deliveryeasy.svg'
import React from '../../images/imgProjects/React.svg'

function Projects() {
    return (
        <div className="Projects" id="Projects">
            <h1> Projetos </h1>

            <Card 
                img={React}
                title="PORTFÓLIO"
                tech="React, HTML, CSS, JavaScript"
                description="Meu portfólio, que estão vendo agora!! Meu primeiro projeto em React, que gostei muito de fazer, tive alguns desafios que eu mesmo propus, que me fizeram aprender ainda mais sobre a linguagem, durante o processo."
                repo="https://github.com/RoniFebrone/Portfolio-react.git"
                site="portifolio-ewfzik0rg-ronifebrone.vercel.app"
            />
            <Card
                img={Byecar}
                title="Lançamento produto - Byecar"
                tech="HTML, CSS, JavaScript"
                description="Este foi um desafio Front-End que fiz, em que além do treino em lógica de programação, html, css e JS, também foi exelente, pois treinamos tambem o uso do figma, foram feitos benchmarks, entre outras demandas que passei para a conclusao do projeto."
                repo="https://github.com/RoniFebrone/Figma-Lp-comp.git"
                site="https://lp-byecar.netlify.app"
            />
            <Card 
                img={Deliveryeasy}
                title="APLICATIVO DE DELIVERY (UI/UX)"
                tech="Figma"
                description="Neste projeto, fui desafiado a criar um aplicativo, com poucas informações, onde precisei criar um benchmark, traçar um plano, e criar um app, em que é possivel realizar uma compra através do protótipo, bem rico em detalhes."
                repo="https://github.com/RoniFebrone/UI-e-UX-Training.git"
                site="https://www.figma.com/proto/zuxZprLMP5mM5oxy0b2Ty6/DeliveryEasy?type=design&node-id=142-9639&t=aRtjZ39ncrd9K8aU-1&scaling=min-zoom&page-id=142%3A4347&starting-point-node-id=142%3A12557&mode=design"
            />
            <Card
                img={CCXP}
                title="LP Lançamento - CCXP"
                tech="HTML, CSS, JavaScript"
                description="Projeto Front-End para que fiz como um desafio para treino de lógica de programação, uso do JavaScrip, e treino em geral de HTML e CSS"
                repo="https://github.com/RoniFebrone/LP-Lancamento-CCXP.git"
                site="https://lp-lancamento-ccxp.vercel.app"
            />
            <div>
                <a href="https://github.com/RoniFebrone?tab=repositories">
                    <button className='btnPrj'>
                        Acesse meu repositório completo!!!
                    </button>
                </a>
            </div>


        </div>
    )
}

export default Projects