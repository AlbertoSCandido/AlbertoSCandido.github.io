import React from 'react'
import recipeAppLogo from '../img/recipe-app-logo.jpg';

const FrontEnd = () => {
  return (
    <>
      <div className="project-card">
        <img src={recipeAppLogo} alt="recipe-app-logo" />
        <div>
          <h1 className="c-tertiary">recipes-app</h1>
          <p className="c-secondary">{'//'} 2021 - Trybe</p>
          <p>Aplicativo para salvar, compartilhar e descobrir receitas feito com react</p>
          <div className="d-flex">
            <a>GitHub</a>
            <a>Site</a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <img src={recipeAppLogo} alt="recipe-app-logo" />
        <div>
          <h1 className="c-tertiary">recipes-app</h1>
          <p className="c-secondary">{'//'} 2021 - Trybe</p>
          <p>Aplicativo para salvar, compartilhar e descobrir receitas feito com react</p>
        </div>
      </div>
      <div className="project-card">
        <img src={recipeAppLogo} alt="recipe-app-logo" />
        <div>
          <h1 className="c-tertiary">recipes-app</h1>
          <p className="c-secondary">{'//'} 2021 - Trybe</p>
          <p>Aplicativo para salvar, compartilhar e descobrir receitas feito com react</p>
        </div>
      </div>
    </>
  )
}

export default FrontEnd
