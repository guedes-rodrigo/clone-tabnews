function status(request,response){
    response.status(200).send({"chave":"Alunos do curso.dev são pessoas acima da média"})
}

export default status