import { ScreenTemplate } from '../screenTemplate';

import { View } from 'react-native';
import Image from '../../../../assets/images/react-logo.png';
import { Badge } from '../../atoms/badge';
import { Input } from '../../atoms/input';
import { PlayerContolButton } from '../../atoms/playerContollButton';
import { WorkoutCard } from '../../organisms/workoutCard';

export const HomeTemplate = () => {
  return (
    <ScreenTemplate title="Home">
      <View style={{ flexDirection: 'column', padding: 20, gap: 20 }}>
        <Input placeholder="Search" icon="search" />
        <Badge text="500 Kcal" icon="local-fire-department" />
        <PlayerContolButton icon="play-arrow" />
        <WorkoutCard
          image={Image}
          kcal="500 Kcal"
          time="30 min"
          onpressButton={() => {}}
        />
      </View>
    </ScreenTemplate>
  );
};
