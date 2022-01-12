import { FC } from 'react';
import tw, { styled, css, theme, TwStyle } from 'twin.macro';

export interface HeadingProps {
  /**
   * The size of the Heading
   * @default "xl"
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /**
   * The heading level
   * @default "h2"
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const sizeVariants = {
  // Named class sets
  '3xl': tw`text-3xl md:text-5xl lg:text-6xl`,
  '2xl': tw`text-2xl md:text-4xl lg:text-5xl`,
  xl: tw`text-lg md:text-3xl lg:text-4xl`,
  lg: tw`text-xl md:text-2xl lg:text-3xl`,
  md: tw`text-xl`,
  sm: tw`text-lg`,
  xs: tw`text-base`,
};

export const Heading = styled.div(({ size }: HeadingProps) => [
  // Base Styles
  tw`font-bold leading-tight`,

  sizeVariants[size],
]);

Heading.defaultProps = {
  size: 'xl',
  as: 'h2',
};
