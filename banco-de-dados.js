import { sql } from './db.js' 

export class Database  {

    create(artigo) {
        const id = 10;
        const nome = artigo.nome;
        const descricao = artigo.descricao;
        const conteudo = artigo.conteudo; 
        const imagem = artigo.imagem;
        const github = artigo.github;

        sql`insert into artigos (id, nome, descricao, conteudo, imagem, github)
        values (${id}, ${nome}, ${descricao}, ${conteudo}, ${imagem}, ${github}, ${nome})`
    }

}