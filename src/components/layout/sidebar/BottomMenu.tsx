import React, { FC } from 'react'
import { Card } from '@mui/material'
import { bottommenu } from './dataBottomMenu'
import { useHistory } from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const BottomMenu: FC = () => {

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
                {bottommenu.map(item => (
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

        </Card>

    )
}

export default BottomMenu