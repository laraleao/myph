// regras de negócio
const express = require("express"); // já instancio na baseUrl com o axios o texto base
const mongoose = require("mongoose");
const axios = require("axios").create({
  baseURL: "http://localhost:4000/'",
});

const porta = 4000;
const app = express();

//para salvar já preciso da classe/ instancia criada
const User = mongoose.model("User", {
  email: String,
  name: String,
  password: String,
});

app.use(express.json());

// criando um novo
app.post("/users", (req, res) => {
  const { email, name, password } = req.body;
  users.push(req.body);
  res.json(req.body);

  if (email != null && name != null && password != null) {
    const newUser = new User(req.body);
    newUser
      .save()
      .then((result) => {
        return res.status(201).json(result);
      })
      .catch(() => {
        return res.status(400).json({ mensagem: "Erro ao salvar dados" });
      });
  } else {
    return res
      .status(401)
      .json({ mensagem: "Os campos email e senha devem ser preenchidos" });
  }
});

app.patch("/users", (req, res) => {
  const { email, name, password } = req.body;

  if (password != null) {
    const newUser = new User(req.body);
    newUser
      .save()
      .then(() => {
        return res.status(200).json({ mensagem: "Senha alterada" });
      })
      .catch(() => {
        return res
          .status(400)
          .json({ mensagem: "Erro na validação dos campos" });
      });
  } else {
    return res.status(401).json({ mensagem: "Token Inválido" });
  }
});

app.post("/cadastro", (req, res) => {
  const { email, password } = req.body;

  const userFound = User.findById((id) => id == email);

  console.log(userFound);

  if (email != null) {
    const newUser = new User(req.body);
    newUser
      .save()
      .then((result) => {
        return res.status(201).json(result);
      })
      .catch(() => {
        return res.status(400).json({ mensagem: "Erro ao salvar dados" });
      });
  } else {
    return res.status(401).json({ mensagem: "senha não confere" });
  }
});

app.listen(porta, () => console.log(`Rodando na porta ${porta}!`));
