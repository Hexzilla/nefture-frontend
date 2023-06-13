import React from 'react';
import { Avatar, ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
  position: 'relative',
  height: '38px',
}));

const Circle = styled('span')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',

  position: 'absolute',

  width: '36px',
  height: '36px',

  background: '#EEEDF2',
  border: '2px solid #FFFFFF',
  borderRadius: '2000px',
}));

interface Props extends ChipProps {
  codes: string[];
  limit?: number;
}

export default function CountryChipGroup({ codes, limit = 3 }: Props) {
  const offset = 26;
  const more = codes.length > limit ? codes.length - limit : 0;

  return (
    <div>
      <Container>
        {(codes || []).slice(0, limit).map((code, index) => (
          <Circle key={index} style={{ left: index * offset, top: 0 }}>
            <Avatar
              alt={code}
              src={`/assets/icons/countries/${code}.svg`}
              sx={{ width: 20, height: 20 }}
            />
          </Circle>
        ))}
        {more > 0 && <Circle style={{ left: limit * offset, top: 0 }}>+{more}</Circle>}
      </Container>
    </div>
  );
}
