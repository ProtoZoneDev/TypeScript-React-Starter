# Store

[Back to list of contents](./README.md)

## Store components

- [Redux (docs)](https://redux.js.org/)
- [Redux Thunk (docs)](https://github.com/reduxjs/redux-thunk)

## Store usage

### Containers and Components
Use Redux `connect` function to provide state and actions to component.

```jsx
class Container extends React.Component {
  [...]
}

const mapStateToProps => (state)=>{
  [...]
}

const mapDispatchToProps = (dispatch) =>{
  [...]
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
```

### Outside Components
Just import store from `store/index.tsx` file.

```jsx
import store from './store'

// Redux
store.dispatch(myAction)

// Redux Thunk
myAction(store.dispatch)
```

## More

##### ...TBD