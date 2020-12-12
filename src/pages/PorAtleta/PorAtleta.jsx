import React, { memo } from "react";

import Typography from "@material-ui/core/Typography";

import TabelaClassificacaoPorAtleta from "../../components/TabelaClassificacao/PorAtleta";

const PorAtleta = () => {
  return (
    <>
      <Typography variant="h6">Classificação por atleta</Typography>

      <TabelaClassificacaoPorAtleta />
    </>
  );
};

export default memo(PorAtleta);
