export default async function getPostDataByID(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`)
    const jsonData = await response.json()
    return jsonData
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
