import React, { memo } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Nome", headerName: "Nome", width: 130 },
  { field: "Pontos", headerName: "Pontos", width: 130 },
];

const rows = [
  { id: 1, Nome: "Amedar", Pontos: 35 },
  { id: 2, Nome: "Leo", Pontos: 35 },
  { id: 3, Nome: "Navarro", Pontos: 35 },
  { id: 4, Nome: "Dani", Pontos: 35 },
  { id: 5, Nome: "Martins", Pontos: 35 },
  { id: 6, Nome: "Tajero", Pontos: 35 },
  { id: 7, Nome: "Braga", Pontos: 35 },
  { id: 7, Nome: "Fuji", Pontos: 35 },
  { id: 9, Nome: "Shindo", Pontos: 35 },
  { id: 10, Nome: "Bruno", Pontos: 35 },
  { id: 11, Nome: "João", Pontos: 35 },
];

const TabelaClassificacaoPorAtleta = () => {
  return (
    <div style={{ height: 870, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={50} />
    </div>
  );
};

export default memo(TabelaClassificacaoPorAtleta);
