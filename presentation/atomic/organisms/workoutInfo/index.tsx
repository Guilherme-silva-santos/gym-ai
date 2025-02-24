import { colors, fontSizes, paddings, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const WorkoutInfo: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.icon}>
          <MaterialIcons name="schedule" size={24} color={colors.gray[900]} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Time</Text>
          <Text style={styles.text}>20 min</Text>
        </View>
      </View>
      <View
        style={{ width: 1, height: '100%', backgroundColor: colors.gray[300] }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.icon}>
          <MaterialIcons
            name="local-fire-department"
            size={24}
            color={colors.gray[900]}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Time</Text>
          <Text style={styles.text}>20 min</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: paddings.md,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    padding: paddings.md,
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    gap: 4,
    padding: paddings.sm,
  },
  title: {
    fontSize: fontSizes.xlarge,
    fontWeight: 'bold',
    color: colors.gray[700],
  },
  text: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
