import { Text } from 'react-native';
import { WorkoutCard } from '../../organisms/workoutCard';
import { ScreenTemplate } from '../screenTemplate';

import logo from '@/assets/images/react-logo.png';

export const HomeTemplate = () => {
  return (
    <ScreenTemplate title="Home">
      <Text>Home</Text>
      <WorkoutCard
        image={logo}
        title="Workout"
        text="loremipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua   pariatur. Lorem ipsum dolor sit amet"
      />
    </ScreenTemplate>
  );
};
