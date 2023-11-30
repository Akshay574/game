import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';
import { Genre } from './useGenres';
import { GameQuery } from '../App';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}


const useGames = (GameQuery: GameQuery) => useData<Game>('/games',
    {
        params: {
            genres: GameQuery.genre?.id,
            platforms: GameQuery.platform?.id,
            ordering: GameQuery.sortOrder,
            search: GameQuery.searchText,
        }
    }, [GameQuery]);


export const useGamest = () => useData<Game>('/games')

export default useGames
