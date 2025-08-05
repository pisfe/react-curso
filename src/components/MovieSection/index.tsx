import styles from './MovieSection.module.css';
import InputText from '../InputText';
import FieldSet from '../FieldSet';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import MovieList from '../MovieList';
import useEffectMovies from '../../hooks/useEffectMovies';
import UseFilterMovies from '../../hooks/UseFilterMovies';


const MovieSection = () => {

    const {movies, isLoading, error} = useEffectMovies();

    const{searchTerm, handleSearch, setSearchTerm, filteredMovies} = UseFilterMovies(movies)


    return (
    <main>
        <section className={styles.container}>
            <FieldSet>
                <InputText 
                    value={searchTerm} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>)=> 
                    setSearchTerm(event.target.value)} 
                    placeholder='Buscar filmes'/>
                <Button onClick={handleSearch} variant='icon'>
                    <FaSearch></FaSearch>
                </Button>
            </FieldSet>
            <h1 className={styles.titulo}>Em cartaz</h1>
            {isLoading && <p>Carregando filmes...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <MovieList movies={filteredMovies}></MovieList>
        </section>
    </main>
  )
}

export default MovieSection;