import path from 'path'
import fs from 'fs'

export default function handler(req, res) {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname + '/../../../../BTK.json')))
    res.status(200).json({ data: file })
}