import './index.scss'

import JS from '../../images/Skill/JS.svg'
import html from '../../images/Skill/html.svg'
import css from '../../images/Skill/css.svg'
import ReactImg from '../../images/Skill/ReactImg.svg'
import Java from '../../images/Skill/Java.svg'
import UiUx from '../../images/Skill/UiUx.svg'
import Figma from '../../images/Skill/Figma.svg'
import Ts from '../../images/Skill/Ts.svg'


function Skills() {
    return (
        <div className="flexSkill">
            <section className="skills" id="Skills">
                <h1>Habilidades</h1>
                <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
                <div>
                    <img src={JS} />
                    <img src={ReactImg} />
                    <img src={Ts} />
                    <img src={Java} />
                    <img src={html} />
                    <img src={css} />
                    <img src={UiUx} />
                    <img src={Figma} />
                </div>
            </section>
        </div>
    )
}

export default Skills