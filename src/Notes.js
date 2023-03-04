// Call axios

const sendData = async () => {
  console.log("clicked")
  const newNote = {
    title: "7PM",
    content: "Content7PM",
  }
  await axios.post("http://localhost:3001/create", newNote)
}
