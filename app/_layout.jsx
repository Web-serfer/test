import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      {/* index screen */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />

      {/* about screen */}
      <Stack.Screen name="about" options={{ title: 'About' }} />     
    </Stack>
  );
}

