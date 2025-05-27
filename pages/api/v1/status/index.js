function status(request, response) {
  response.status(200).json({ chave: "Api está funcional"})
}

export default status;