import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/20601076?s=460&u=164dd0918a0eb4ffcd0615290fc198453c9461be&v=4" alt="Francisco Maik" />
        <div>
          <strong>trabalhando</strong>
          <p>descrição</p>
        </div>

        <FiChevronRight size={20} />

      </a>

      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/20601076?s=460&u=164dd0918a0eb4ffcd0615290fc198453c9461be&v=4" alt="Francisco Maik" />
        <div>
          <strong>trabalhando</strong>
          <p>descrição</p>
        </div>

        <FiChevronRight size={20} />

      </a>

      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/20601076?s=460&u=164dd0918a0eb4ffcd0615290fc198453c9461be&v=4" alt="Francisco Maik" />
        <div>
          <strong>trabalhando</strong>
          <p>descrição</p>
        </div>

        <FiChevronRight size={20} />

      </a>
    </Repositories>
  </>
);

export default Dashboard;
