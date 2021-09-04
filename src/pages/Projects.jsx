import React from 'react';
import '../styles/projects.css'
import FrontEnd from '../components/FrontEnd';
import BackEnd from '../components/BackEnd';


const Projects = () => {
  const [stack, setStack] = React.useState('front-end');
  return (
    <div id="projects">
      <div className="d-flex w-100 j-c-stretch">
        <button
          className="grow-1"
          type="button"
          onClick={ () => setStack('front-end') }
        >
          Front-end
        </button>
        <button
          className="grow-1"
          type="button"
          onClick={ () => setStack('back-end') }
        >
          Back-end
        </button>
      </div>
      { stack === 'front-end' ? <FrontEnd /> : <BackEnd /> }
    </div>
  )
}

export default Projects;
