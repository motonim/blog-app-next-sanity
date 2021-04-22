import { getAllBlogs } from 'lib/api';

async function getBlogs(req, res) {
  const data = await getAllBlogs();
  res.status(200).json(data);
}

export default getBlogs;
