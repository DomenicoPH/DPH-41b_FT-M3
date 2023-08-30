const express = require("express");

let publications = [];
let id = 1;

const server = express();

server.use(express.json());

/* Server funcionando...
server.get('/',(req,res) => {
    res.status(200).end('Servidor montado en puerto 3001')
})
*/

//test1
server.post('/posts',(req,res) => {
    const { author, title, contents } = req.body;
    if(author && title && contents){
        const publication = {
            author,
            title,
            contents,
            id: id++
        }
        publications.push(publication);
        res.status(200).json(publication);
    } else {
        res
        .status(404)
        .json({error:"No se recibieron los parámetros necesarios para crear la publicación"});
    }
})

//test2
server.get('/posts',(req,res) => {
    const { author, title } = req.query;
    if(author && title){
        const publicationsFiltered = publications.filter(
            publication => publication.autor && publication.title
            );
            if(publicationsFiltered.length){
                res.status(200).json(publicationsFiltered);
            } else {
                res.status(404).json({error: "No existe ninguna publicación con dicho título y autor indicado"})
            }
    }
})

//test3
server.get('/posts/:author',(req,res) => {
    const { author } = req.params;
    const publicationsFiltered = publications.filter(publication => publication.author === author)
    if(publicationsFiltered.length){
        return res.status(200).json(publicationsFiltered);
    }
    res.status(404).json({error: "No existe ninguna publicación del autor indicado"})
})

//test4
server.put('/posts/:id',(req,res) => {
    const {id} = req.params;
    const {title,contents} = req.body;
    if(id && title && contents){
        const publicationFiltered = publications.find((publication) => {
            publication.id === parseInt(id)
        })
        if(!publicationFiltered){
            res.status(404).json({error: "No se recibió el id correcto necesario para modificar la publicación"})
        } else {
            publicationFiltered = { ...publicationFiltered, title, contents };
            res.status(200).json(publicationFiltered);
        }
    } else {
        res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"})
    }
})

//test5
server.delete('/posts/:id',(req,res) => {
    const {id} = req.params;
    if(!id){
        res.status(400).json({error: "No se recibió el id de la publicación a eliminar"})
    } else {
        let publicationsFiltered = publications.filter(
            publication => publication.id !== Number(id)
        )
        if(publications.length === publicationsFiltered.length){
            res.status(400).json({error: "No se recibió el id correcto necesario para eliminar la publicación"});
        } else {
            publications = publicationsFiltered;
            res.status(200).json({ success: true })
        }
    }
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
