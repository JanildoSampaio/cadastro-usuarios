import { useState } from "react";
import { api } from "../../services/api.js";

import {
  Container,
  Form,
  InputUser,
  Label,  
} from "./styles";


import Button from "../../components/button";
import BannerTtop from "../../components/container/index.jsx";

const Home = () => {
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");  
  const [message, setMessage] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !age || !name) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const ageAsInt = parseInt(age, 10);

      if (isNaN(ageAsInt) || ageAsInt <= 0) {
        setMessage("A idade deve ser um número inteiro positivo.");
        return;
      }
      
      await api.post('/usuarios', { email, age, name });
      setMessage("Usuário cadastrado com sucesso!");
      setEmail("");
      setAge("");
      setName("");
    } catch (error) {
      setMessage("Erro ao cadastrar usuário. Por favor, tente novamente.");
      console.error("Erro ao cadastrar usuário:", error);
    }
  };
    
  return (
    <Container>
      <BannerTtop />
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
