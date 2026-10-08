import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FORTUNE TELLER</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUPTWkOWi-vTnxPVCyX19Va-HRR9AFG9C0px20kx1fW17COAJT-J_ngs&s=10'
        }}
        style={styles.image}
      />

      {/* Practical information section */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Coding can be tough, but the universe has a plan for your code.
          Are you about to face a massive bug, or will your code compile on
          the first try?
        </Text>
      </View>

      {/* Navigation Button */}
      <Button
        title="Reveal My Coding Destiny"
        color="#0c5ca9"
        onPress={() => router.push('/reveal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f70f2a',
    lineHeight: 24,
  },
});