import React from 'react';
import { ButtonContainer } from './Styles'

export type ButtonProps= {
  position:string,
  title:string,
  handleClick: (title: string) => void;
}

const Button = ({
  title,
  position,
  handleClick
}: ButtonProps): JSX.Element => {
  const handleBtnClick = (): void => {
    handleClick(title);
  };
  return (
    <ButtonContainer data-testid={position}  position={position} className={position} onClick={handleBtnClick} >
      <span>{title}</span>
    </ButtonContainer>
  );
};

export default Button
