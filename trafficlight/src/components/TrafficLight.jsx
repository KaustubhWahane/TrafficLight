import  { useState, useEffect } from 'react';
import './TrafficLight.css'; 

function TrafficLight() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (color) {
        case 'red':
          setColor('yellow');
          break;
        case 'yellow':
          setColor('green');
          break;
        case 'green':
          setColor('red');
          break;
        default:
          break;
      }
    }, 3000); 

    // To clear the interval
    return () => clearInterval(intervalId); 
  }, [color]); 

  return (
    <div className="traffic-light">
      <div className={`light red ${color === 'red' ? 'active' : ''}`} />
      <div className={`light yellow ${color === 'yellow' ? 'active' : ''}`} />
      <div className={`light green ${color === 'green' ? 'active' : ''}`} />
    </div>
  );
}

export default TrafficLight;