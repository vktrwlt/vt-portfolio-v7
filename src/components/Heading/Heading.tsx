import { FC } from 'react';
import tw, { styled, css, theme, TwStyle } from 'twin.macro';

export interface HeadingProps {
  /**
   * The size of the Heading
   * @default "xl"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const sizeVariants = {
  // Named class sets
  '3xl': tw`text-5xl lg:text-6xl`,
  '2xl': tw`text-4xl lg:text-5xl`,
  xl: tw`text-3xl lg:text-4xl`,
  lg: tw`text-2xl lg:text-3xl`,
  md: tw`text-xl`,
  sm: tw`text-lg`,
};

export const Heading: FC<HeadingProps> = styled.div(({ size }) => [
  // Base Styles
  tw`font-bold leading-tight`,

  sizeVariants[size],
]);

Heading.defaultProps = {
  size: 'xl',
};
