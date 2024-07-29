import { Image, StyleSheet, Platform } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { H2, H4, Paragraph, Text, View } from 'tamagui'

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <H2>Welcome!</H2>
      </View>
      <View style={styles.stepContainer}>
        <H4>Step 1: Try it</H4>
        <Text>
          Edit <Text fontWeight="bold">app/(tabs)/index.tsx</Text> to see changes. Press{' '}
          <Text fontWeight="bold">{Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}</Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <H4>Step 2: Explore</H4>
        <Paragraph>
          Tap the Explore tab to learn more about what's included in this starter app.
        </Paragraph>
      </View>
      <View style={styles.stepContainer}>
        <H4>Step 3: Get a fresh start</H4>
        <Paragraph>
          When you're ready, run <Text fontWeight="bold">npm run reset-project</Text> to get a fresh{' '}
          <Text fontWeight="bold">app</Text> directory. This will move the current{' '}
          <Text fontWeight="bold">app</Text> to <Text fontWeight="bold">app-example</Text>.
        </Paragraph>
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
