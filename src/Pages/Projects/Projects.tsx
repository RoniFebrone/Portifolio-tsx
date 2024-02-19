
import './index.scss'

import Card from '../../Components/Card/Card'


import ToDoList from '../../images/imgProjects/ToDoList.svg'
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
                tech="React, TypeScript, SASS, Vite"
                description="Meu portfólio, que estão vendo agora!! Esse foi uma migração do meu primeiro projeto em react, que hoje está com a tipagem do TypeScript. No primeiro momento, foi bem difícil fazer, por se tratar da primeira experiência com react, e para migra-lo para o TS, foi bem mais simples, mas notável que precisa de otimização"
                repo="https://github.com/RoniFebrone/Portifolio-tsx"
                site="https://portifolio-tsx-tau.vercel.app"
            />
            <Card
                img={ToDoList}
                title="Lista de tarefas"
                tech="React JS, Vite, React Router Dom, Sass, JSON Server, NodeJS"
                description="Projeto Front-end, que era apenas pra ser uma simples lista de tarefas apenas sem seu modelo vizual, mas utilizei, um banco de dados adaptado em nodeJS para simular um banco de dados com o JSON Server para que fique mais funcional para testes, e que me ajudou entender muito mais sobre hospedagens, AWS, até o próprio nodeJS "
                repo="https://github.com/RoniFebrone/to-do-list"
                site="https://to-do-list-taupe-one.vercel.app"
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

            <div className='Projects__div--a'>
                <a className='Projects__a' href="https://github.com/RoniFebrone?tab=repositories">
                    <button className='btnPrj'>
                        Acesse meu repositório completo!!!
                    </button>
                </a>
            </div>


        </div>
    )
}

export default Projects