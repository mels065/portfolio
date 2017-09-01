import React from 'react';
import {getValidIcon} from '../get-icon';
import Icon from 'react-icons-kit';
import path from 'path';
import {font} from 'react-icons-kit/icomoon/font';

describe('getValidIcon(icon)', () => {
  it('returns an Icon component if given an icon from react-icons-kit', () => {
    expect(getValidIcon(font).type).toEqual(<Icon icon={font} />.type);
  });

  it('returns an i element with an img as a child if given a valid img path', () => {
    expect(getValidIcon(path.join(__dirname, './assets/react.png')).type).toEqual(<i />.type);
  });

  it('returns an Icon component with an X icon if not given a valid input', () => {
    expect(getValidIcon('foo').type).toEqual(<Icon icon={font} />.type);
  });
});
