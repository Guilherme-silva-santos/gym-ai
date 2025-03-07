import { ScreenTemplate } from '../screenTemplate';

import { paddings } from '@/theme';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Img from '../../../../assets/images/download.jpg';
import exercise from '../../../../assets/images/react-logo.png';
import { ExerciseCard } from '../../organisms/exerciseCard';
import { PreviewVideoCard } from '../../organisms/previewVideoCard';

type ExerciseProps = {
  id: string;
  time: string;
  kcal: string;
  image: string;
};

type PreviewExerciseProps = {
  id: string;
  title: string;
  reps: string;
  image: string;
};

export const HomeTemplate = () => {
  const [trening, setTreining] = useState<ExerciseProps[]>([]);
  const [exerciseCard, setExerciseCard] = useState<PreviewExerciseProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData: ExerciseProps[] = [
        {
          id: '1',
          time: '30 min',
          kcal: '250 kcal',
          image: Img,
        },
        {
          id: '2',
          time: '45 min',
          kcal: '320 kcal',
          image: Img,
        },
        {
          id: '3',
          time: '60 min',
          kcal: '400 kcal',
          image: Img,
        },
        {
          id: '4',
          time: '25 min',
          kcal: '200 kcal',
          image: Img,
        },
      ];
      setTreining(mockData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const exerciseData: PreviewExerciseProps[] = [
        {
          id: '1',
          title: 'Flexão de Braço',
          reps: '3 séries de 12 repetições',
          image: exercise,
        },
        {
          id: '2',
          title: 'Agachamento',
          reps: '4 séries de 15 repetições',
          image: exercise,
        },
        {
          id: '3',
          title: 'Prancha',
          reps: '3 séries de 45 segundos',
          image: exercise,
        },
        {
          id: '4',
          title: 'Levantamento Terra',
          reps: '4 séries de 10 repetições',
          image: exercise,
        },
        {
          id: '5',
          title: 'Supino Reto',
          reps: '4 séries de 12 repetições',
          image: exercise,
        },
      ];

      setExerciseCard(exerciseData);
    };
    fetchData();
  }, []);

  return (
    <ScreenTemplate title="Home">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: paddings.md, gap: 16 }}
      >
        <View>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>Treinos</Text>
        </View>
        <View style={{ gap: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Treinos Populares
          </Text>
          <FlatList
            horizontal
            data={trening}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PreviewVideoCard
                kcal={item.kcal}
                time={item.time}
                image={item.image}
              />
            )}
            contentContainerStyle={{ gap: 16 }}
          />
          <View>
            <Text>Treinos de hoje</Text>
            <View style={{ gap: 16 }}>
              {exerciseCard.map(item => (
                <ExerciseCard
                  key={item.id}
                  reps={item.reps}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenTemplate>
  );
};
