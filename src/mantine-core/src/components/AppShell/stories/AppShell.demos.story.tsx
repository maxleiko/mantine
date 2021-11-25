import { storiesOf } from '@storybook/react';
import { attachDemos } from '@mantine/ds';
import * as demos from '../demos';

const stories = storiesOf('@mantine/core/AppShell/demos', module);

attachDemos(stories, demos);
