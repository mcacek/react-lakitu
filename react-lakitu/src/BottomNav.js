import React, { Component } from 'react'


import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import IconPerson from 'material-ui/svg-icons/social/person'
import IconLock from 'material-ui/svg-icons/action/lock'
import IconEvent from 'material-ui/svg-icons/communication/message'

const eventsIcon = <IconEvent />
const cardholderIcon = <IconPerson />
const doorIcon = <IconLock />

class BottomNav extends Component {
    state = {
        selectedIndex: 0,
    }

    select = (index) => this.setState({ selectedIndex: index })

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Doors"
                        icon={doorIcon}
                        onTouchTap={() => this.select(0) }
                        />
                    <BottomNavigationItem
                        label="Cardholders"
                        icon={cardholderIcon}
                        onTouchTap={() => this.select(1) }
                        />
                    <BottomNavigationItem
                        label="Events"
                        icon={eventsIcon}
                        onTouchTap={() => this.select(2) }
                        />
                </BottomNavigation>
            </Paper>
        )
    }
}

export default BottomNav