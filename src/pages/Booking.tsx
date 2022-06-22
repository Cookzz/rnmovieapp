import React from 'react'
import { WebView } from 'react-native-webview'

const Booking: React.FC<{}> = (props: any) => {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: 'https://www.cathaycineplexes.com.sg/' }}
    />
  )
}

export default Booking