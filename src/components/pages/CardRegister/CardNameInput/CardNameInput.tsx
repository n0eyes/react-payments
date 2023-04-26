import React, { InputHTMLAttributes } from 'react';
import { useCardName } from '../../../../hooks/card/card';
import { REGEX } from '../../../../utils/validation';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import { StyledCardRegister } from '../@common/CardRegister.styles';
import * as Styled from './CardNameInput.styles';

export default function CardNameInput() {
  const { error, holderName, onChange, onBlur } = useCardName();

  return (
    <Flex dir="column" onBlur={onBlur}>
      <Input>
        <Flex justify="space-between">
          <Input.Label asChild>
            <StyledCardRegister.Label>카드소유자이름(선택)</StyledCardRegister.Label>
          </Input.Label>
          <Input.Limit limit={30}>
            {({ value, limit }) => (
              <span>
                {value.length}/{limit}
              </span>
            )}
          </Input.Limit>
        </Flex>
        <StyledCardRegister.InputBackground>
          <Input.Field name="name" id="name" value={holderName} onChange={onChange} {...defaultAttr}>
            <Styled.Input />
          </Input.Field>
        </StyledCardRegister.InputBackground>
      </Input>
      <StyledCardRegister.Error>{error}</StyledCardRegister.Error>
    </Flex>
  );
}

const defaultAttr: InputHTMLAttributes<HTMLInputElement> & { asChild: boolean } = {
  asChild: true,
  required: true,
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  pattern: REGEX.ENGLISH,
  maxLength: 30,
};
