import * as React from 'react';
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { IStoreState } from '../store/types';
import { rootLoading } from '../store/actions/rootActions'
import routes from './routes'
import './App.scss';

class App extends React.Component<any, any, any> {
  public componentWillMount() {
    this.props.dispatch(rootLoading())
  }
  public render() {
    return (
      <ConnectedRouter history={this.props.history}>
        {this.props.loading ? (<p>loading</p>) : (<div className="App"><p>Redux works good</p>{routes}</div>)}
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  loading: state.root.rootLoading
})

export default connect(mapStateToProps)(App);
