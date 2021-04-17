import React, { FC } from 'react';
import './custom-button.styles.scss';

interface Props {
  isDisabled: boolean,
  text: string
}

const CustomButton: FC<Props> = ({ text, isDisabled }: Props) => (
  <button
    type="submit"
    className="submit-button"
    disabled={isDisabled}
  >
    {text}
  </button>
);

export default CustomButton;
