export const calculateTip = (billAmount, tipPercent) => {
  return (billAmount * tipPercent) / 100;
}

export const calculateTotal = (billAmount, tipPercent) => {
  const tipAmount = calculateTip(billAmount, tipPercent);

  return billAmount + tipAmount;
}