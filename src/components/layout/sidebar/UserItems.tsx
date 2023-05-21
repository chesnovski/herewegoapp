import React, { FC } from 'react'
import { Box } from '@mui/system'
import { Link, useHistory } from 'react-router-dom'
import { Avatar, Card } from '@mui/material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { QuestionAnswer } from '@mui/icons-material';
import { users } from './dataUsers'



const UserItems: FC = () => {

  const history = useHistory()

  return (
    <Card
      sx={{
        padding: 2,
      }}>
      {users.map(user =>

        <Link
          key={user._id}
          to={`/profile/${user._id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            marginBottom: 12
          }}
        >
          <Box
            sx={{
              position: 'realtive', marginLeft: 2, marginRight: 2,
              borderRadius: '50%', overflow: 'hidden', width: 50, height: 50
            }}>
            <Avatar
              src={user.avatar}
              alt=''
              sx={{ width: 48, height: 48 }}
            />
          </Box>
          <span style={{ fontSize: 14 }}> {user.name}</span>
        </Link>
      )}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history.push('/messages')} >
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card >
  )
}

export default UserItems