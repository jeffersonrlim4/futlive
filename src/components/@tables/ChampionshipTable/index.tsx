import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { IClassification } from "src/@types/IClassification";

export function ChampionshipTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const { data: dadosPartida } = useGetAllDadosPartida();

  const columns = useMemo<MRT_ColumnDef<IClassification>[]>(
    () => [
      {
        accessorKey: "Posicao",
        header: "Posição",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Equipe",
        header: "Equipe",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Pontos",
        header: "Pontos",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Jogos",
        header: "Jogos",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Vitorias",
        header: "Vitórias",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Empates",
        header: "Empates",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Derrotas",
        header: "Derrotas",
        size: 10,
      },
      {
        accessorKey: "GolsPro",
        header: "Gols",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "SaldoGols",
        header: "Saldo de gols",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "CartoesAmarelos",
        header: "Cartões amarelos",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "CartoesVermelhos",
        header: "Cartões vermelhos",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Aproveitamento",
        header: "Aproveitamento",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "Movimentacao",
        header: "Movimentação",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
      {
        accessorKey: "MediaPontos",
        header: "Media de pontos",
        size: 10,
        muiTableBodyCellProps: {
          sx: { textAlign: "center" },
        },
        muiTableHeadCellProps: {
          sx: { textAlign: "center" },
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: dadosPartida?.data.ClassificacaoGrupo[0].Classificacao ?? [],
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableColumnFilters: false,
    enableHiding: false,
    enablePagination: false,
    enableColumnActions: false,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      globalFilter,
      density: "compact",
    },
  });

  return <MaterialReactTable table={table} />;
}
