import React from 'react'
import recipeAppLogo from '../img/recipe-app-logo.jpg';
import pixelArtLogo from '../img/pixel-art-logo.png';
import imageArtLogo from '../img/to-do-list-logo.jpeg';
import { Link } from 'react-router-dom';

const FrontEnd = () => {
  return (
    <>
      <div className="project-card">
        <img src={recipeAppLogo} alt="recipe-app-logo" />
        <div className="d-flex f-d-column">
          <h1 className="c-tertiary">recipes-app</h1>
          <p className="c-secondary">{'//'} 2021 - Trybe</p>
          <p>Aplicativo para salvar, compartilhar e descobrir receitas feito com react.</p>
          <a
            href="https://github.com/AlbertoSCandido/recipes-app"
            target="_blank"
            rel="noreferrer"
            className="fs-3"
          >
            GitHub
          </a>
          <a
            href="https://albertoscandido.github.io/recipes-app"
            target="_blank"
            rel="noreferrer"
            className="fs-3"
          >
            Demonstração
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src={ pixelArtLogo } alt="pixel-art-logo" />
        <div>
          <h1 className="c-tertiary">pixel-art</h1>
          <p className="c-secondary">{'//'} 2021 - Trybe</p>
          <p>
            Página com uma paleta de cores funcional que pode ser utilizada para criar desenhos em pixels feita com JS, HTML e CSS.
          </p>
          <a
            href="https://github.com/AlbertoSCandido/pixel-art"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://albertoscandido.github.io/pixel-art"
            target="_blank"
            rel="noreferrer"
          >
            Demonstração
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src={ imageArtLogo } alt="recipe-app-logo" />
        <div>
          <h1 className="c-tertiary">to-do-list</h1>
          <p className="c-secondary">{'//'} 2021 - Trybe</p>
          <p>Uma lista de tarefas feita usando React e Context API.</p>
          <a
              href="https://github.com/albertoscandido/to-do-list"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://albertoscandido.github.io/to-do-list/"
              target="_blank"
              rel="noreferrer"
            >
              Demonstração
            </a>
        </div>
      </div>
      <footer className="footer-home p-2 fs-3 link-shadow">
        <h3>Quer trabalhar junto ou tem alguma dúvida?</h3>
        <Link to="/contact" className="c-tertiary">DIGA OI 👋🏻</Link>
      </footer>
    </>
  )
}

export default FrontEnd;
