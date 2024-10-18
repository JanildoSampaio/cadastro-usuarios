import { useState } from "react";
import { api } from "../../services/api.js";

import {
  BannerTtop,
  Container,
  Form,
  InputUser,
  Label,
  Button,
} from "./styles";

import Banner from "../../assets/banner.png";

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!name || !age || !email) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await api.post('/usuarios', { name, age, email });
      setMessage("Usuário cadastrado com sucesso!");
      setName("");
      setAge("");
      setEmail("");
    } catch (error) {
      setMessage("Erro ao cadastrar usuário. Por favor, tente novamente.");
      console.error("Erro ao cadastrar usuário:", error);
    }
  };
    
  return (
    <Container>
      <BannerTtop>
        <img src={Banner} alt="Banner" />
      </BannerTtop>

      <Form onSubmit={registerUser}>
        <h1>Cadastrar Usuário</h1>
        {message && <p style={{ color: 'white', fontSize: '18px'}}>{message}</p>}
        <div>
          <Label>
            Nome<span> *</span>
          </Label>
          <InputUser type="text" placeholder="Nome do Usuário" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>

        <div>
          <Label>
            Idade<span> *</span>
          </Label>
          <InputUser type="number" placeholder="Idade do Usuário" value={age} onChange={(e) => setAge(e.target.value)} required/>
        </div>

        <div>
          <Label>
            E-mail<span> *</span>
          </Label>
          <InputUser type="email" placeholder="Email do Usuário" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <Button type="submit">Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
};

export default Home;
