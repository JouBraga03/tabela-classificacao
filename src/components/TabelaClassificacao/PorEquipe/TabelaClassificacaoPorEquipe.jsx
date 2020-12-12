import React, { memo } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Nome", headerName: "Nome", width: 600 },
  { field: "Pontos", headerName: "Pontos", width: 130 },
];

const rows = [
  { id: 1, Nome: "Amedar, Leo, Navarro", Pontos: 35 },
  { id: 2, Nome: "Dani, Martins, Tajero", Pontos: 35 },
  { id: 3, Nome: "Braga, Fuji, shindo", Pontos: 35 },
  { id: 4, Nome: "Bruno, João, Aleatório", Pontos: 35 },
];

const TabelaClassificacaoPorEquipe = () => {
  return (
    <div style={{ height: 870, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={50} />
    </div>
  );
};

export default memo(TabelaClassificacaoPorEquipe);
