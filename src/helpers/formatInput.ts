const formatInput = (inputValue: any) => (
  inputValue.length > 0 ? +inputValue : undefined
);

export default formatInput;
