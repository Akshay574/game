import React from 'react'
import useGames, { Game, useGamest } from '../hook/useGames'
import { Card, CardBody, Heading, HStack, Image, Skeleton } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import { Genre } from '../hook/useGenres'
import Emoji from './Emoji';


interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const { isLoading } = useGamest()
    return (
        <>
            {isLoading ?
                <Card>
                    <Skeleton>
                        <Image src={getCroppedImageUrl(game.background_image)} />
                    </Skeleton>
                    <CardBody>
                        <HStack justifyContent='space-between' marginBottom={3}>
                            <Skeleton><PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} /></Skeleton>
                            <Skeleton><CriticScore score={game.metacritic} /></Skeleton>
                        </HStack>
                        <HStack marginY={4} justifyContent='space-between'>
                            <Skeleton><Heading fontSize='2xl'>{game.name}</Heading></Skeleton>
                            <Skeleton><Emoji rating={game.rating_top} /></Skeleton>
                        </HStack>
                    </CardBody>
                </Card> : <Card>
                    <Image src={getCroppedImageUrl(game.background_image)} />
                    <CardBody>
                        <HStack justifyContent='space-between' marginBottom={3}>
                            <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                            <CriticScore score={game.metacritic} />
                        </HStack>
                        <HStack marginY={4} justifyContent='space-between'>
                            <Heading fontSize='2xl'>{game.name} </Heading>
                            <Emoji rating={game.rating_top} />
                        </HStack>
                    </CardBody>
                </Card>}
        </>

    )
}

export default GameCard
