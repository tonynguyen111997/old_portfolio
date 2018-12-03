import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialNetworksButtons = ({ containerClass }) => {
  return (
    <div className={containerClass}>
      <button>
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
      </button>
      <button onClick={()=> window.open('https://github.com/tonynguyen111997')}>
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
      </button>
      <button>
        <FontAwesomeIcon icon={['fab', 'codepen']} size="2x" />
      </button>
      <button>
        <FontAwesomeIcon icon="envelope" size="2x" />
      </button>
    </div>
  );
}

export default SocialNetworksButtons;