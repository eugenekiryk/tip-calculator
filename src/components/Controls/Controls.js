import ButtonGroup from './ButtonGroup';
import Card from '../UI/Card/Card';
import Input from'../UI/Input/Input';
import DollarIcon from '../../assets/icon-dollar.svg';
import PersonIcon from '../../assets/icon-person.svg';

import classes from './Controls.module.css';

function Controls(props) {
  return (
    <Card className={classes.controls}>
      <Input label="Bill" 
        input={{
          id: "bill",
          value: props.billAmount,
          placeholder: "0",
          onChange: e => props.onPassBill(e.target.value)
        }}
      >
        <img className={classes['input-icon']} src={DollarIcon} alt="dollar-icon" />
      </Input>
      <ButtonGroup onPassTip={props.onPassTip} tipAmount={props.tipAmount} />
      <Input label="People" 
        input={{
          id: "people",
          value: props.peopleCount,
          placeholder: "0",
          onChange: e => props.onPassPeople(e.target.value)
        }}
      >
        <img className={classes['input-icon']} src={PersonIcon} alt="person-icon" />
      </Input>
    </Card>
  );
};

export default Controls;