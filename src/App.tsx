import './App.css'
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from "react";
import NavBar from './component/Navbar';
import GameGrid from './component/GameGrid';
import GameCard from './component/GameCard';
import GenreList from './component/GenreList';
import { Genre } from './hook/useGenres';
import PlatformSelector from './component/PlatformSelector';
import { Platform } from './hook/useGames';
import SortSelector from './component/SortSelector';
import { HStack, Box } from '@chakra-ui/react';
import GameHeading from './component/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  console.log(gameQuery)

  // const [selectedGenre, setSelctedGenre] = useState<Genre | null>(null)
  // const [selectPlatform, setSelectplatform] = useState<Platform | null>(null)
  // console.log(selectedGenre)

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
        templateColumns={{
          base: '1fr',
          lg: '300px 1fr'
        }}>
        <GridItem area="nav" >
          <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>
        <Show above='lg'>
          <GridItem area="aside" paddingX={5}>
            <GenreList gameQuery={gameQuery} selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
        <GridItem area="main" paddingX={5}>
          <Box paddingX={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector SelectPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
            </HStack>
            <GameGrid GameQuery={gameQuery} />
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
