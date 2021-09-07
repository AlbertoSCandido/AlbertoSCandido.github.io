import React from 'react'
import recipeAppLogo from '../img/recipe-app-logo.jpg';
import pixelArtLogo from '../img/pixel-art-logo.png';
import imageArtLogo from '../img/to-do-list-logo.jpeg';

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
          >
            GitHub
          </a>
          <a
            href="https://albertoscandido.github.io/recipes-app"
            target="_blank"
            rel="noreferrer"
          >
            Site
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
            Site
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
              href="https://albertoscandido.github.io/to-do-list/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/albertoscandido/to-do-list"
              target="_blank"
              rel="noreferrer"
            >
              Site
            </a>
        </div>
      </div>
    </>
  )
}

export default FrontEnd;
