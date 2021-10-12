import { useState } from 'react';

import Card from '../UI/Card/Card';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';

import classes from './Main.module.css';

function Main() {
  const [billAmount, setBillAmount] = useState('');
  const [tipAmount, setTipAmount] = useState({ id: '', value: '' });
  const [peopleCount, setPeopleCount] = useState('');

  const billAmountHandler = billAmount => {
    if (billAmount === '' || isNaN(billAmount)) {
      setBillAmount('');
    } else {
      setBillAmount(parseFloat(billAmount));
    }
  }

  const tipAmountHandler = (id, tipAmount) => {
    setTipAmount({ id: id, value: tipAmount });
  }

  const peopleCountHandler = peopleCount => {
    if (peopleCount === '' || isNaN(peopleCount)) {
      setPeopleCount('');
    } else {
      setPeopleCount(parseInt(peopleCount));
    }
  }

  const resetHandler = () => {
    setBillAmount('');
    setTipAmount({ id: '', value: '' });
    setPeopleCount('');
  }

  return (
    <main className={classes.main}>
      <Card className={classes.container}>
        <Controls 
          billAmount={billAmount}
          tipAmount={tipAmount}
          peopleCount={peopleCount}
          onPassBill={billAmountHandler} 
          onPassTip={tipAmountHandler}
          onPassPeople={peopleCountHandler} 
        />
        <Display 
          billAmount={billAmount} 
          tipAmount={tipAmount.value}
          peopleCount={peopleCount} 
          onReset={resetHandler} 
        />
      </Card>
    </main>
  );
}

export default Main;