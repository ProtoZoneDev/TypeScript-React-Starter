import * as React from 'react'
import { connect } from 'react-redux'
import { IStoreState } from 'src/store/types';

interface HomeProps { }

class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div>Routing works good</div>
    )
  }
}

const mapStateToPorps = (state: IStoreState) => ({
  root: state.root
})

export default connect(mapStateToPorps)(Home)