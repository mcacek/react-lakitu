import React from 'react'

// import FontIcon from 'material-ui/FontIcon'
// import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'

import BottomNav from './BottomNav'

const App = React.createClass({
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Lakitu"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />

          {this.props.children}
          
          <BottomNav />
        </div>
      </MuiThemeProvider>
    )
  }
})

export default App