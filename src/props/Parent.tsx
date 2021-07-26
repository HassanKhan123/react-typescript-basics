import React from 'react';

import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => {}}>
      aaaa
    </ChildAsFC>
  );
};

export default Parent;
