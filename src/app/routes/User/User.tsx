import * as React from 'react'
import { connect } from 'react-redux'
import { IStoreState } from 'src/store/types';

interface UserProps { }

class User extends React.Component<UserProps> {
  render() {
    return (
      <div>Fake User Profile</div>
    )
  }
}

const mapStateToPorps = (state: IStoreState) => ({
  root: state.root
})

export default connect(mapStateToPorps)(User)