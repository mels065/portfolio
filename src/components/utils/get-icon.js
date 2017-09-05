import React from 'react';
import Icon from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'

function getValidIcon(icon) {
  if (typeof icon === 'object') return <Icon icon={icon} />;
  else if (typeof icon === 'string') return <img src={icon} alt="icon" />;
  else return <Icon icon={cross} />;
}

export {getValidIcon};
