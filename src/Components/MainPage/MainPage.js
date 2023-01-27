import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  // antes de fazer a função on change form, existiam todas essas abaixo
  // const onChangeNome = (event) => {
  //   setNome(event.target.value);
  // };

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value);
  // };

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value);
  // };
  const [formulario, onChangeForm, clear] = useForm({
    nome: "",
    idade: "",
    email: "",
    profissao: ""
  });

  const handleClick = (event) => {
    event.preventDefault();
    clear();

    console.log(
      `nome: ${formulario.nome}, idade: ${formulario.idade}, e-mail: ${formulario.email}, profissão: ${formulario.profissao} `
    );
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          id="nome"
          name="nome"
          type="text"
          value={formulario.nome}
          onChange={onChangeForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          id="idade"
          name="idade"
          type="number"
          value={formulario.idade}
          onChange={onChangeForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formulario.email}
          onChange={onChangeForm}
        />
        <label htmlFor="profissao">Profissão:</label>
        <Input
          id="profissao"
          name="profissao"
          type="text"
          //pattern é do regex, que quer dizer q no mínimo precisa ter 3 letras
          // tem vários tipos de regex, basta procurar a condição que quer e colocar
          pattern="[A-Z]{3}"
          title="Todas as letras devem ser maiúsculas e no mín 3 letras"
          value={formulario.profissao}
          onChange={onChangeForm}
          required
        />
        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
