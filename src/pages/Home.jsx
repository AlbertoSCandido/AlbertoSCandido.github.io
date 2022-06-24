import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import perfil from '../img/perfil-logo.jpeg';
import bootstrap from '../img/bootstrap.png';
import css from '../img/css.png';
import html from '../img/html.png';
import js from '../img/js.png';
import react from '../img/react.png';
import redux from '../img/redux.png';
import node from '../img/node.png';
import mongodb from '../img/mongodb.png';
import mysql from '../img/mysql.png';
import git from '../img/git.png';
import Skill from '../components/Skill';
import alberto from '../img/alberto.png';

const Home = () => {
  console.log(window.innerWidth);
  return (
    <main>
      <section className="section-home">
        <div className="d-flex f-d-column" >
          <h1>Olá 👋🏻</h1>
          <h1>Meu nome é <span className="c-tertiary fw-1" >Alberto</span>.</h1>
          <h1>Eu sou um desenvolvedor de software no Itaú Unibanco.</h1>
        </div>
        <img src={ alberto } alt="avatar-alberto" className="perfil-img" />
      </section>
      <section className="d-flex f-wrap j-c-spAround gap-3 p-2 about-section">
        <img src={ perfil } alt="Perfil" className="perfil-img" />
        <div className="about-text">
          <h2><span className="c-tertiary">Sobre</span> mim</h2>
          <p>Tenho 24 anos, moro em Araguari-MG e sou apaixonado por solucionar problemas usando lógica.
            Atualmente trabalho com desenvolvimento de software no Itaú e nas horas vagas você pode me encontrar ouvindo músicas, assistindo séries ou filmes e fazendo trilhas.
          </p>
          <p>
            Abaixo você irá encontrar algumas das ferramentas/linguagens que já tive a oportunidade de estudar ou trabalhar.
          </p>
          <br />
          <Link to="/projects" className="c-tertiary">Conheça meus projetos {'>'}</Link>
        </div>
      </section>
      <section className="skills-section">
        <h2>
          <span className="c-tertiary">Hard </span>Skills
        </h2>
        <div className="skills-list">
          <Skill text="HTML" img={html} />
          <Skill text="CSS" img={css} />
          <Skill text="Bootstrap" img={bootstrap} />
          <Skill text="JavaScript" img={js} />
          <Skill text="React" img={react} />
          <Skill text="Redux" img={redux} />
          <Skill text="Node" img={node} />
          <Skill text="MongoDB" img={mongodb} />
          <Skill text="MySQL" img={mysql} />
          <Skill text="Git/GitHub" img={git} />
        </div>
      </section>
      <footer className="footer-home fs-3 link-shadow">
        <h3>Quer saber um pouco mais dos projetos ou sobre mim?</h3>
        <Link to="/contact" className="c-tertiary">Vamos conversar! 👋🏻</Link>
      </footer>
    </main>
  )
}

export default Home;
