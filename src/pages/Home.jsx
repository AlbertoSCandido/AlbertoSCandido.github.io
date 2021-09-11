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


const Home = () => {
  return (
    <main>
      <section className="section-home">
        <h1>Olá 👋🏻</h1>
        <h1>Meu nome é Alberto.</h1>
        <h1>Eu sou um estudante de desenvolvimento de software.</h1>
      </section>
      <section className="d-flex f-wrap j-c-spAround gap-3 p-2 about-section">
        <img src={perfil} alt="Perfil" id="perfil-img" />
        <div className="about-text">
          <h2><span className="c-tertiary">Sobre</span> mim</h2>
          <p>Tenho 23 anos e moro atualmente em Araguari-MG. Sou apaixonado por solucionar problemas usando lógica.
            Sou um estudante de desenvolvimento de software e nas horas vagas meus hobbies são: músicas, séries, filmes e trilhas.
          </p>
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
          <Skill text="Git" img={git} />
        </div>
      </section>
      <footer className="footer-home fs-3 link-shadow">
        <h3>Quer trabalhar junto ou tem alguma dúvida?</h3>
        <Link to="/contact" className="c-tertiary">DIGA OI 👋🏻</Link>
      </footer>
    </main>
  )
}

export default Home;
