export type Categoria = "2D" | "3D"; 
export type Censura = "10 anos" | "12 anos" | "14 anos" | "16 anos" | "Livre" ; 


export interface Movie {
    id: number;
    src: string;
    alt: string;
    titulo: string;
    categoria: Categoria;
    censura: Censura;
    genero: string;
    duracao: number;
};