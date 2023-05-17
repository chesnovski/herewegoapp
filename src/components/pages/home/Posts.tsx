import { Avatar, ImageList, ImageListItem } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../../../types'

interface IPosts {
    posts: IPost[]
}

const Posts: FC<IPosts> = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <Box
                    sx={{
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        padding: 2,
                        marginTop: 5
                    }}
                >
                    <Link
                        key={post.author._id}
                        to={`/profile/${post.author._id}`}
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
                                src={post.author.avatar}
                                alt=''
                                sx={{ width: 48, height: 48 }}
                            />
                        </Box>
                        <div>
                            <div style={{ fontSize: 14 }}> {post.author.name}</div>
                            <div style={{ fontSize: 14, opacity: '0.6' }}> {post.createdAt}</div>
                        </div>

                    </Link>

                    <p>
                        {post.content}
                    </p>

                    {post?.images?.length && (
                        <ImageList cols={3} gap={8}>
                            {post.images.map(image => (
                                <ImageListItem key={image}>
                                    <img
                                        src={image}
                                        alt={''}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}

                </Box>
            ))}</>
    )
}

export default Posts