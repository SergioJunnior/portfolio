import React from 'react';
import { TypographyStyle } from './typography.styles';
import loadLangText from '@/utils/textconvert';

interface TypographyProps {
  children?: String;
  translateId?: string;
  messageDefault?: string;
  className:
    | 'title-medium'
    | 'title'
    | 'subtitle'
    | 'subtitle-medium'
    | 'subtitle-small'
    | 'text'
    | 'paragraph'
    | 'phrase'
    | 'tag';
  htmlElement:
    | 'span'
    | 'strong'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
}

const Typography: React.FC<TypographyProps> = ({
  htmlElement = 'span',
  className = 'text',
  children,
  translateId,
  messageDefault,
  ...props
}) => {
  const attr = {
    className,
    ...props,
  };

  const TextElement = (props: any) =>
    React.createElement(`${htmlElement}`, attr, props.text);

  return (
    <>
      <TypographyStyle />
      <TextElement
        text={
          translateId && messageDefault
            ? loadLangText(translateId, messageDefault)
            : children
        }
      />
    </>
  );
};

export default Typography;
