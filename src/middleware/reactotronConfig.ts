import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import Config from '../config/debugConfig'

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron
    .configure({ name: 'React-TypeScript' })
    .use(reactotronRedux())
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-js
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}