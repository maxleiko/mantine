import React from 'react';
import { Button } from '../Button';
import { Group } from '../../Group/Group';

function Demo() {
  return (
    <>
      <Group position="center">
        <Button variant="subtle">Subtle variant</Button>
        <Button variant="light">Light variant</Button>
        <Button>Filled variant</Button>
        <Button variant="outline">Outline variant</Button>
        <Button variant="default">Default variant</Button>
      </Group>
    </>
  );
}

export const variants: MantineDemo = {
  type: 'demo',
  component: Demo,
};
