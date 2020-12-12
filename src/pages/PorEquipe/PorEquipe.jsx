import React, { memo } from "react";

import Typography from "@material-ui/core/Typography";

import TabelaClassificacaoPorEquipe from "../../components/TabelaClassificacao/PorEquipe";

const PorEquipe = () => {
  return (
    <>
      <Typography variant="h6">Classificação por Equipe</Typography>

      <TabelaClassificacaoPorEquipe />
    </>
  );
};

export default memo(PorEquipe);
