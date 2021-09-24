import React from 'react';
import FrontEnd from '../components/FrontEnd';
import BackEnd from '../components/BackEnd';
import '../styles/projects.css';
import {  Link } from 'react-router-dom';

const Projects = () => {
  const [stack, setStack] = React.useState('front-end');
  return (
    <main>
      <section id="projects">
        <div className="d-flex w-100 j-c-stretch buttons-tasks">
          <button
            className={`grow-1 btn-icon c-tertiary link-shadow ${stack === 'front-end' ? 'stack-selected' : '' }`}
            type="button"
            onClick={ () => setStack('front-end') }
          >
            Front-end
          </button>
          <button
            className={`grow-1 btn-icon c-tertiary link-shadow ${stack === 'back-end' ? 'stack-selected' : ''} `}
            type="button"
            onClick={ () => setStack('back-end') }
          >
            Back-end
          </button>
        </div>
        { stack === 'front-end' ? <FrontEnd /> : <BackEnd /> }
      </section>
      <footer className="footer-home fs-3 link-shadow">
        <h3>Quer saber um pouco mais dos projetos ou sobre mim?</h3>
        <Link to="/contact" className="c-tertiary">Vamos conversar! 👋🏻</Link>
      </footer>
    </main>
  )
}

export default Projects;
