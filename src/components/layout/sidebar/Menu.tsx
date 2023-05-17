import React, { FC } from 'react'
import { Box } from '@mui/system'
import { Link, useHistory } from 'react-router-dom'
import { Avatar, Card } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { menu } from './dataMenu'

const Menu: FC = () => {

    const history = useHistory()

    return (
        <Card
            sx={{
                padding: 2,
                marginTop: 2,
                borderRadius: 3,
                border: 'none'
            }}>
            <List>
                {menu.map(item => (
                    <ListItem key={item.link} disablePadding>
                        <ListItemButton onClick={() => history.push(item.link)} >
                            <ListItemIcon>
                                < item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card >
    )
}

export default Menu