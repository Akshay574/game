import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hook/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hook/useGenres';
import { GameQuery } from '../App';
// import GameCardSkeleton from './GameCardSkeleton';


interface Props {
    GameQuery: GameQuery
    // selectedGenre: Genre | null
    // selectPlatform: Platform | null
}

const GameGrid = ({ GameQuery }: Props) => {
    const { data, error, isLoading } = useGames(GameQuery);
    // const skeleton = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {
                error && <Text>{error}</Text>
            }
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding='10px' spacing={10}>
                {/* {isLoading && skeleton.map(skeleton => <GameCardSkeleton  key={skeleton} />)} */}
                {data.map((game) => (
                    <GameCardContainer key={game.id} >
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>

    )
}

export default GameGrid
