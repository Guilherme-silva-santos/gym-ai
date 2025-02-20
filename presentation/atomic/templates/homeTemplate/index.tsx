import { ScreenTemplate } from '../screenTemplate';

import { Badge } from '../../atoms/badge';
import { Input } from '../../atoms/input';
import { PlayerContolButton } from '../../atoms/playerContollButton';

export const HomeTemplate = () => {
  return (
    <ScreenTemplate title="Home">
      <Input placeholder="Search" icon="search" />
      <Badge text="500 Kcal" icon="local-fire-department" />
      <PlayerContolButton icon="play-arrow" />
    </ScreenTemplate>
  );
};
