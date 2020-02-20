import React from 'react';
import '../styles.css';
const Progress = props => {
  let correct = Math.floor((props.right / props.total) * 100);
  let incorrect = Math.floor((props.wrong / props.total) * 100);
  
  let barStyle = {
    display: 'flex',
    height: '20px',
    width: '350px',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid black',
  };

  let correctStyle = {
    height: 'inherit',
    width: `${correct}%`,
    backgroundColor: 'green',
  };
  let incorrectStyle = {
    height: 'inherit',
    width: `${incorrect}%`,
    backgroundColor: 'red',
  };

  return (
    <div className="progress-div">
      <div className="progress-bar" style={barStyle}>
        <div className="filler" style={correctStyle}>
          {correct > 0 ? <div className="current-progress"><span role="img" aria-label="party-popper">🎉</span></div> : null}
        </div>
        <div className="filler" style={incorrectStyle}>
          {incorrect > 0 ? <div className="current-progress"><span role="img" aria-label="confounded-face">😖</span></div> : null}
        </div>
      </div>
    </div>
  );
};
export default Progress;
