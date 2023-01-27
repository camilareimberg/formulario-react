import { useState } from "react";

export default function useForm(initialState) {
  // se deixar com essas propriedades o form não vai ficar geral, fica restrito ao form q recebe as propriedades de nome, email, idade. Para deixar mais geral deixamos como abaixo sem
  // const [formulario, setFormulario] = useState({
  //   nome: "",
  //   idade: "",
  //   email: ""
  // });
  const [formulario, setFormulario] = useState(initialState);

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    //event.target é toda a tag input
    console.log(event.target);
    setFormulario({ ...formulario, [name]: value });
  };

  const clear = () => {
    //estado inicial sempre vamos receber vazio. A lógica de pegar o valor está dentro do useForm, por isso que limpa o formulário quando chama a função clear
    setFormulario(initialState);
  };
  //return só pode retornar uma coisa por vez, por isso nesse caso retornamos as duas cisas dentro de um array - poderia ser objeto tb

  return [formulario, onChangeForm, clear];
}
