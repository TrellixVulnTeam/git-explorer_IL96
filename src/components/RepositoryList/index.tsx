import React, { useEffect, useState } from 'react';
import RepositoryItem from "../RepositoryItem";

import '../../styles/repositories.scss'

type Repository = {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [setRepositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => <RepositoryItem repository={repository} key={repository.id}/>)}
      </ul>
    </section>
  )
}

export default RepositoryList;