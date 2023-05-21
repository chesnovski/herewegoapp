import { IconButton, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useState, KeyboardEvent } from 'react'
import { IPost, TypeSetState } from '../../../types'
import { users } from '../../layout/sidebar/dataUsers'
import { FileUploadOutlined } from '@mui/icons-material'

interface IAddPost {
    setPosts: TypeSetState<IPost[]>
}


const AddPost: FC<IAddPost> = ({ setPosts }) => {
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')


    // @ts-ignore
    const handleImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))

    }

    const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setPosts(prev => [
                {
                    author: users[0],
                    content,
                    createdAt: '5 minutes',
                    images: [image]

                }, ...prev
            ])
            setContent('')
            setImage('')
        }
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
                    endAdornment: (
                        <IconButton component="label">
                            <FileUploadOutlined />
                            <input
                                type="file"
                                hidden
                                onChange={handleImage}
                                name="[licenseFile]"
                                accept='image/*, .png, .jpg, .gif, .web'
                                multiple
                            />
                        </IconButton>
                    ),
                    sx: { borderRadius: '25px', bgcolor: '#F8F8F8' }
                }}
                sx={{
                    width: '100%',
                }}
                onKeyPress={addPostHandler}
                onChange={e => setContent(e.target.value)}
                value={content}

            />
            {image && (
                <Box
                    component="img"
                    sx={{
                        height: 80,
                        width: 100,
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        padding: 2,
                        marginTop: 2


                    }}
                    src={image} alt='' />
            )}


        </Box>
    )
}

export default AddPost