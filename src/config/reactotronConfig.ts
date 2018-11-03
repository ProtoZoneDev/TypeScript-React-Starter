import Reactotron, { openInEditor } from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

export default Reactotron
  .configure()
  .use(
    reactotronRedux(),
    openInEditor()
  )
  .connect()