import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import classes from './ButtonGroup.module.css';

function ButtonGroup({ onPassTip, tipAmount }) {
  const tipValueHandler = event => {
    let tip, tipValue;
    const id = event.target.id;

    if (id === "custom") {
      tip = event.target.value;
      tipValue = tip && !isNaN(tip) ? parseFloat(tip) : '';
    } else {
      tip = event.target.innerHTML;
      tipValue = parseFloat(tip.slice(0, -1));
    }

    onPassTip(id, tipValue);
  }

  return (
    <div className={classes['button-group']}>
      <p className={classes['button-group-label']}>Select Tip %</p>
      <div className={classes['button-group-buttons']}>
        <Button 
          id="5%" 
          className={`${tipAmount.id === '5%' ? classes.active : ''}`} 
          onClick={tipValueHandler}>
          5%
        </Button>
        <Button 
          id="10%" 
          className={`${tipAmount.id === '10%' ? classes.active : ''}`} 
          onClick={tipValueHandler}>
          10%
        </Button>
        <Button 
          id="15%" 
          className={`${tipAmount.id === '15%' ? classes.active : ''}`} 
          onClick={tipValueHandler}>
          15%
        </Button>
        <Button 
          id="25%" 
          className={`${tipAmount.id === '25%' ? classes.active : ''}`} 
          onClick={tipValueHandler}>
          25%
        </Button>
        <Button 
          id="50%" 
          className={`${tipAmount.id === '50%' ? classes.active : ''}`} 
          onClick={tipValueHandler}>
          50%
        </Button>
        <Input 
          className={classes.custom} 
          input={{ 
            id: "custom", 
            value: tipAmount.id === "custom" ? tipAmount.value : '',
            placeholder: "Custom",
            onChange: tipValueHandler
          }} 
        />
      </div>
    </div>
  );
};

export default ButtonGroup;