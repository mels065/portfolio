import React from 'react';
import fs from 'fs';
import Icon from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'

function getValidIcon(icon) {
  if (typeof icon === 'object') return <Icon icon={icon} />;
  else if (isValidPath(icon)) return <i><img src={icon} alt="icon" /></i>;
  else return <Icon icon={cross} />;
}

export {getValidIcon};

/*PRIVATE FUNCTIONS*/
function isValidPath(str) {
  if (typeof str === 'string') {
    try {
      fs.accessSync(str);
      return true;
    } catch(err) {
      return false;
    }
  }
}
