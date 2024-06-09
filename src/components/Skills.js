// src/components/ProgressSection.js
import React from 'react';


  const Skills = ({name,done}) => {
    const [style, setStyle] = React.useState({});
    
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }
      
      setStyle(newStyle);
    }, 200);
    
    return (
      <div>
      <span className="skill-name">{name}</span>
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
      </div>
    )
  };
    


export default Skills;
