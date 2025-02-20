import { ScreenTemplate } from '../screenTemplate';

import { useState } from 'react';
import { Button, View } from 'react-native';
import Image from '../../../../assets/images/react-logo.png';
import { Badge } from '../../atoms/badge';
import { Input } from '../../atoms/input';
import { PlayerContolButton } from '../../atoms/playerContollButton';
import { ProgressBar } from '../../atoms/progressBar';
import { PreviewVideoCard } from '../../organisms/previewVideoCard';

export const HomeTemplate = () => {
  const [progress, setProgress] = useState(0);
  return (
    <ScreenTemplate title="Home">
      <View style={{ flexDirection: 'column', padding: 20, gap: 20 }}>
        <Input placeholder="Search" icon="search" />
        <Badge text="500 Kcal" icon="local-fire-department" />
        <PlayerContolButton icon="play-arrow" />
        <PreviewVideoCard
          image={Image}
          kcal="500 Kcal"
          time="30 min"
          onpressButton={() => {}}
        />
        <ProgressBar progress={progress} />
        <Button
          title="Aumentar Progresso"
          onPress={() => setProgress(prev => (prev >= 100 ? 0 : prev + 10))}
        />
      </View>
    </ScreenTemplate>
  );
};
