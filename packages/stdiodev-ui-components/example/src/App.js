import React from 'react'

import { Button } from 'stdiodev-ui-components'
import 'stdiodev-ui-components/dist/index.css'

const App = () => {
  return <Button label="Create React Library Example 😄" handleClick={() => alert('Lib Working')} />
}

export default App
