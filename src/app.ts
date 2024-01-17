import express from 'express'

const app = express()

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params
  res.end(`Item: ${slug}`)
})

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
