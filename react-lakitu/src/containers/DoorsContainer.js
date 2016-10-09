import { connect } from 'react-redux'

import DoorList from '../components/DoorList'

const mapStateToProps = (state) => {
  return {
    doors: state.doors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDoorclick: (id) => {
        console.log('door clicked')
    //   dispatch(toggleTodo(id))
    }
  }
}

const DoorsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DoorList)

export default DoorsContainer