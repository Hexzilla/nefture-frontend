import { Collapse, Stack } from '@mui/material';
import { useState } from 'react';

import { Risk } from './types';
import Risks from './Risks';
import RiskLabel from './RiskLabel';

type Props = {
  risks?: Risk[] | null;
};

export default function CriticalRisks({ risks }: Props) {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState('flex');
  const [rotate, setRotate] = useState('rotate(180deg)');

  const changeOpen = () => {
    setOpen(!open);
    if (display === 'flex') setDisplay('none');
    else setDisplay('flex');
    if (!open) setRotate('rotate(0deg)');
    else setRotate('rotate(180deg)');
  };

  return (
    <Risks
      title="Critical Risks"
      subtitle="3 risks identified"
      color="critical.main"
      onClick={changeOpen}
    >
      <Collapse in={open} unmountOnExit>
        <Stack spacing="10px" m="16px">
          {(risks || []).map((item: Risk, index: number) => (
            <RiskLabel key={index} variant="danger" description={item.description} />
          ))}
        </Stack>
      </Collapse>
    </Risks>
  );
}
