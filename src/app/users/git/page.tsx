'use client'

interface RepoProps {
  id: number,
  name: string,
  url: string
}



export default async function GitRepos() {
  const response = await fetch('http://localhost:3333/git')
  const data: RepoProps[] = await response.json()





  return (
    <div>
      {data.length !== 0 ? data.map((repo: RepoProps) => (
        <div key={repo.id} >
          <p className="px-2 h-8 mb-4 flex items-center justify-start rounded-md text-white bg-slate-800"><a href={repo.url}>{repo.name}</a></p>
        </div>
      )) : <p>Nenhum repositório encontrado</p>}
    </div >
  )

}
