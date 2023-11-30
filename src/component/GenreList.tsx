import React from 'react'
import useGenres, { Genre } from './../hook/useGenres';
import { List, ListItem, ListIcon, HStack, Spinner, Button, Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { GameQuery } from '../App';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
    gameQuery: GameQuery
}

const GenreList = ({ onSelectGenre, selectedGenre, gameQuery }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null

    if (isLoading) return <Spinner />

    const heading = `${gameQuery.genre?.name || 'Genrens'}`

    return (
        <>
            <Heading marginY={5}>{heading}</Heading>
            <List>
                {
                    data.map((genre) => (
                        <ListItem key={genre.id} paddingY="5px">
                            <HStack>
                                <Image
                                    boxSize="32px"
                                    borderRadius={8}
                                    objectFit="cover"
                                    src={getCroppedImageUrl(genre.image_background)}
                                />
                                <Button fontSize={genre.id === selectedGenre?.id ? '20px' : '15px'} fontWeight={genre.id === selectedGenre?.id ? 'Bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant='link'>{genre.name}</Button>
                            </HStack>
                        </ListItem>
                    ))
                }
            </List >
        </>
    )
}

export default GenreList
