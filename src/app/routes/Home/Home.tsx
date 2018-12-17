import * as React from 'react'
import { connect } from 'react-redux'
import { IStoreState } from 'src/store/types';
import styled from 'styled-components'

interface HomeProps { }

const Dupa = styled.div`
width: 100px;
height: 100px;
background: red;
`

class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div>
        <Dupa />
        <div>Routing works good</div>
      </div>
    )
  }
}

const mapStateToPorps = (state: IStoreState) => ({
  root: state.root
})

export default connect(mapStateToPorps)(Home)