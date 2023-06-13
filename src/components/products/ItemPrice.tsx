import React from 'react';

type Props = {
  price: Number;
};

export default function ItemPrice({ price }: Props) {
  return <>£{price.toLocaleString('en-US')}</>;
}
