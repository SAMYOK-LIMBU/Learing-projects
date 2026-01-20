import React from 'react'
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Main from './screen/Main'
import { store } from './screen/reduxwithtx/store'

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <SafeAreaView style={styles.container}>
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
