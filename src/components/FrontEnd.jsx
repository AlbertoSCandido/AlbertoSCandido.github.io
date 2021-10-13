import React from 'react'
import recipeAppLogo from '../img/recipe-app-logo.jpg';
import pixelArtLogo from '../img/pixel-art-logo.png';
import imageArtLogo from '../img/to-do-list-logo.jpeg';
import gatito from '../img/gatito.png';

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
            href="https://github.com/albertoscandido/recipes-app"
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
            href="https://github.com/albertoscandido/pixel-art"
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
        <img src={ gatito } alt="pixel-art-logo" />
        <div>
          <h1 className="c-tertiary">gatito-blog</h1>
          <p className="c-secondary">{'//'} 2021 - Alura</p>
          <p>
            Blog fictício desenvolvido em página estática para praticar conhecimentos de SASS.
          </p>
          <a
            href="https://github.com/albertoscandido/projeto-sass"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://albertoscandido.github.io/projeto-sass/index.html"
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
          <p>Uma lista de tarefas feita usando React, Context API e com integração de testes.</p>
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
    </>
  )
}

export default FrontEnd;
