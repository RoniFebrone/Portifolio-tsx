
import './index.scss'

interface CardProps {
    img: string,
    title: string,
    tech: string,
    description: string,
    repo: string,
    site: string
}

const Card = ({ img, title, tech, description, repo, site }: CardProps) => {


    return (
        <div className="card">

            <a href={site} target='blank'>
                <img src={img} alt='error' />
            </a>


            <section>
                <h3> {title} </h3>
                <h4>  Tecnologias : {tech} </h4>
                <p className='btnP' > {description} </p>

                {/* <ButtonB text='Acesse o repositório' link={repo} /> */}

                <a href={repo} target='_blank'>
                    <button className='btnRepo'> Acesse o repositório! </button>
                </a>
            </section>


        </div>
    )
}

export default Card