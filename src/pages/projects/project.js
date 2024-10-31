import { promises as fs } from 'fs';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/posts/projects.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}