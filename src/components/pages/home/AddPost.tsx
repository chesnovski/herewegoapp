import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useState, KeyboardEvent } from 'react'
import { IPost, TypeSetState } from '../../../types'
import { users } from '../../layout/sidebar/dataUsers'

interface IAddPost {
    setPosts: TypeSetState<IPost[]>
}


const AddPost: FC<IAddPost> = ({ setPosts }) => {
    const [content, setContent] = useState('')

    const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            setPosts(prev => [
                {
                    author: users[0],
                    content,
                    createdAt: '5 minutes'
                }, ...prev
            ])
        setContent('')

    }

    return (
        <Box
            sx={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: 2
            }}
        >
            <TextField
                label="What's new"
                InputProps={{
                    sx: { borderRadius: '25px', bgcolor: '#F8F8F8' }
                }}
                sx={{
                    width: '100%',
                }}
                onKeyPress={addPostHandler}
                onChange={e => setContent(e.target.value)}
                value={content}

            />
        </Box>
    )
}

export default AddPost