import type { NextApiHandler } from 'next'

const itemsIdex: NextApiHandler = async (req, res) => {

 const items = []

  res.status(200).json({ status: true, data: items, message: "Items fetch successfully " })
}

export default itemsIdex