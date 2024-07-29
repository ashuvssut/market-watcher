import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Image, Platform } from 'react-native'

import { Collapsible } from '@/components/Collapsible'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { H2, Paragraph, Text, View } from 'tamagui'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <View style={styles.titleContainer}>
        <H2>Explore</H2>
      </View>
      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title="File-based routing">
        <Paragraph>
          This app has two screens: <Text fontWeight="bold">app/(tabs)/index.tsx</Text> and{' '}
          <Text fontWeight="bold">app/(tabs)/explore.tsx</Text>
        </Paragraph>
        <Paragraph>
          The layout file in <Text fontWeight="bold">app/(tabs)/_layout.tsx</Text> sets up the tab
          navigator.
        </Paragraph>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Paragraph>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <Text fontWeight="bold">w</Text> in the terminal running this project.
        </Paragraph>
      </Collapsible>
      <Collapsible title="Images">
        <Paragraph>
          For static images, you can use the <Text fontWeight="bold">@2x</Text> and{' '}
          <Text fontWeight="bold">@3x</Text> suffixes to provide files for different screen
          densities
        </Paragraph>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Paragraph>
          Open <Text fontWeight="bold">app/_layout.tsx</Text> to see how to load{' '}
          <Text style={{ fontFamily: 'SpaceMono' }}>custom fonts such as this one.</Text>
        </Paragraph>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Paragraph>
          This template has light and dark mode support. The{' '}
          <Text fontWeight="bold">useColorScheme()</Text> hook lets you inspect what the user's
          current color scheme is, and so you can adjust UI colors accordingly.
        </Paragraph>
      </Collapsible>
      <Collapsible title="Animations">
        <Paragraph>
          This template includes an example of an animated component. The{' '}
          <Text fontWeight="bold">components/HelloWave.tsx</Text> component uses the powerful{' '}
          <Text fontWeight="bold">react-native-reanimated</Text> library to create a waving hand
          animation.
        </Paragraph>
        {Platform.select({
          ios: (
            <Paragraph>
              The <Text fontWeight="bold">components/ParallaxScrollView.tsx</Text> component
              provides a parallax effect for the header image.
            </Paragraph>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
