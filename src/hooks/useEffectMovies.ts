import { useEffect, useState } from 'react'
import type { Movie } from '../types';
import { getMovies } from '../api';



const useEffectMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const movies = await getMovies();
            setMovies(movies);
        } catch (error) {
            setError("Erro ao buscar filmes");
            console.error(error);
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        fetchMovies();
    }, []);

  return {
        movies, isLoading, error
    };
}

export default useEffectMovies;