import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";

export const MenuItens = [
  {
    grupo: "Classificação",
    lista: [
      {
        icone: () => <PersonIcon />,
        nome: "Por Atleta",
        path: "/atletas",
      },
      {
        icone: () => <GroupIcon />,
        nome: "Por Equipe",
        path: "/equipes",
      },
    ],
  },
];
