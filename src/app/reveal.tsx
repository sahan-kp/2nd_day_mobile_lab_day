import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function RevealScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Here is your Fortune!</Text>

      <Image
        source={{
          uri: 'https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQarJlqCxZ8swcgkDNWHV82hEdGeyVkoDS6xdYgr7oRAi_RYuhU5kWKr8&s=10',
        }}
        style={styles.image}
      />

      <View style={styles.fortuneBox}>
        <Text style={styles.fortuneText}>
          You will solve a bug today by randomly deleting a single line of code that you didn't even write.
        </Text>
      </View>

      <Button
        title="Go Back"
        color="#6f067"
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#e0f7fa',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0335f5',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginBottom: 40,
    marginTop: 10,
  },
  fortuneBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#95032e',
    marginBottom: 30,
  },
  fortuneText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00838f',
    fontStyle: 'italic',
  },
});