import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import { calculateTip, calculateTotal } from '../../helpers/calculations';

import classes from './Display.module.css';

function Display({ billAmount, tipAmount, peopleCount, onReset }) {
  const calculateTotalPerPerson = (billAmount, tipAmount, peopleCount) => {
    const totalPerPerson = calculateTotal(billAmount, tipAmount) / peopleCount;
    return totalPerPerson.toFixed(2);
  }

  const calculateTipPerPerson = (billAmount, tipAmount, peopleCount) => {
    const tipPerPerson = calculateTip(billAmount, tipAmount) / peopleCount;
    return tipPerPerson.toFixed(2);
  }

  return (
    <Card className={classes.display}>
      <div className={classes.summary}>
        <div className={classes.total}>
          <div className={classes['total-label']}>
            <p className={classes['amount-label']}>Tip Amount</p>
            <p className={classes['per-person']}>/ person</p>
          </div>
          <p className={classes.amount}>
            $
            {
              billAmount && peopleCount ? 
              calculateTipPerPerson(billAmount, tipAmount, peopleCount) 
              : "0.00"
            }
          </p>
        </div>
        <div className={classes.total}>
          <div className={classes['total-label']}>
            <p className={classes['amount-label']}>Total</p>
            <p className={classes['per-person']}>/ person</p>
          </div>
          <p className={classes.amount}>
            $
            {
              billAmount && peopleCount ? 
              calculateTotalPerPerson(billAmount, tipAmount, peopleCount) 
              : "0.00"
            }
          </p>
        </div>
      </div>
      <Button
        className={classes['button-reset']}
        disabled={!billAmount && !tipAmount && !peopleCount}
        onClick={onReset}
      >
        RESET
      </Button>
    </Card>
  );
}

export default Display;