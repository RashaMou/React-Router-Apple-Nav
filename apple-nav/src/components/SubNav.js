import React from 'react';

const SubNav = (props) => {
  return (
    <div>
    {props.icons.map(icon => {
      return (icon);
    })}
    </div>
  )
}

export default SubNav