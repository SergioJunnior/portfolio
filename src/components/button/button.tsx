import { ButtonProps } from './button.type';
import * as S from './button.styles';

const Button = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
