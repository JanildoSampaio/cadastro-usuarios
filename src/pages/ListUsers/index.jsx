import Button from "../../components/button";
import BannerTtop from "../../components/container/index.jsx";
import Trash from "../../assets/trash.svg";

import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  TrashIcon,
} from "./styles.js";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");

      setUsers(data);
    }
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/usuarios/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container>
      <BannerTtop />
      <h1>Listagem de Usuários</h1>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            
            />
            <div>
              <h3>Nome: {user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Idade: {user.age}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixeira" onClick={() => handleDelete(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button onClick={()=> navigate("/")}>Voltar</Button>
    </Container>
  );
};

export default ListUsers;
