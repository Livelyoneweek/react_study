import React, { memo } from 'react';

// memo는 부모컴포터는가 리 렌더링 됬을 떄 자식 컴포턴트가 리 렌더링 되는 것을 막아줌
const Try = memo( ({tryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});
// memo 쓸떄 displayName도 할것
Try.displayName = 'Try';

export default Try;