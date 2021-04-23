import { getAllBlogs } from 'lib/api';

async function getBlogs(req, res) {
  const offset = parseInt(req.query.offset || 0, 10);

  const data = await getAllBlogs({ offset });
  res.status(200).json(data);
}

export default getBlogs;
