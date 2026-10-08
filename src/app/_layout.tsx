import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* This sets the title in the top navigation bar for our two screens */}
      <Stack.Screen name="index" options={{ title: 'Welcome' }} />
      <Stack.Screen name="reveal" options={{ title: 'Your Fortune' }} />
    </Stack>
  );}
