// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')

export default function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body

    const data = {
      temperature: body.temperature
    }

    const filePath = 'public/data.json';
    const json = JSON.stringify(data)
    console.log(filePath, json);
    fs.writeFileSync(filePath, json, { flag: 'w' })

    res.status(201).end()

  } else {
    res.status(200).json({ "message": "Server is up!" })
  }
}
