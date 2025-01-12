import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { ILances } from "src/@types/ILances";

const lances: ILances[] = [
  {
    Descricao: "Gols",
    Botafogo: 2,
    SaoPaulo: 1,
    Total: 3,
  },
  {
    Descricao: "Finalizações",
    Botafogo: 17,
    SaoPaulo: 5,
    Total: 22,
  },
  {
    Descricao: "Finalizações no Alvo",
    Botafogo: 8,
    SaoPaulo: 1,
    Total: 9,
  },
  {
    Descricao: "Finalizações fora",
    Botafogo: 7,
    SaoPaulo: 2,
    Total: 9,
  },
  {
    Descricao: "Finalizações defendidas",
    Botafogo: 6,
    SaoPaulo: 0,
    Total: 6,
  },
  {
    Descricao: "Finalizações na trave",
    Botafogo: 0,
    SaoPaulo: 0,
    Total: 0,
  },
  {
    Descricao: "Finalizações bloqueadas",
    Botafogo: 2,
    SaoPaulo: 2,
    Total: 4,
  },
  {
    Descricao: "Cabeçadas a gol",
    Botafogo: 4,
    SaoPaulo: 0,
    Total: 4,
  },
  {
    Descricao: "Chutes a gol",
    Botafogo: 13,
    SaoPaulo: 5,
    Total: 18,
  },
  {
    Descricao: "Assistência para Finalização",
    Botafogo: 4,
    SaoPaulo: 1,
    Total: 5,
  },
  {
    Descricao: "Cobranças de Falta",
    Botafogo: 0,
    SaoPaulo: 0,
    Total: 0,
  },
  {
    Descricao: "Gols contra",
    Botafogo: 0,
    SaoPaulo: 0,
    Total: 0,
  },
  {
    Descricao: "Escanteios",
    Botafogo: 3,
    SaoPaulo: 0,
    Total: 3,
  },
  {
    Descricao: "Faltas cometidas",
    Botafogo: 8,
    SaoPaulo: 3,
    Total: 11,
  },
  {
    Descricao: "Faltas recebidas",
    Botafogo: 3,
    SaoPaulo: 8,
    Total: 11,
  },
  {
    Descricao: "Impedimentos",
    Botafogo: 1,
    SaoPaulo: 0,
    Total: 1,
  },
  {
    Descricao: "Precisão dos Passes",
    Botafogo: "92%",
    SaoPaulo: "89%",
    Total: null,
  },
  {
    Descricao: "Passes",
    Botafogo: 516,
    SaoPaulo: 596,
    Total: 1112,
  },
  {
    Descricao: "Passes completos",
    Botafogo: 478,
    SaoPaulo: 534,
    Total: 1012,
  },
  {
    Descricao: "Passes incompletos",
    Botafogo: 37,
    SaoPaulo: 62,
    Total: 99,
  },
  {
    Descricao: "Passes decisivos",
    Botafogo: 1,
    SaoPaulo: 0,
    Total: 1,
  },
  {
    Descricao: "Desarmes",
    Botafogo: 15,
    SaoPaulo: 19,
    Total: 34,
  },
  {
    Descricao: "Desarmes incompletos",
    Botafogo: 2,
    SaoPaulo: 3,
    Total: 5,
  },
  {
    Descricao: "Dribles",
    Botafogo: 7,
    SaoPaulo: 2,
    Total: 9,
  },
  {
    Descricao: "Dribles Certos",
    Botafogo: 5,
    SaoPaulo: 0,
    Total: 5,
  },
  {
    Descricao: "Dribles Errados",
    Botafogo: 2,
    SaoPaulo: 2,
    Total: 4,
  },
  {
    Descricao: "Defesas normais",
    Botafogo: 1,
    SaoPaulo: 4,
    Total: 5,
  },
  {
    Descricao: "Defesas difíceis",
    Botafogo: 0,
    SaoPaulo: 3,
    Total: 3,
  },
  {
    Descricao: "Defesas de pênalti",
    Botafogo: 0,
    SaoPaulo: 0,
    Total: 0,
  },
  {
    Descricao: "Cartões amarelos",
    Botafogo: 0,
    SaoPaulo: 0,
    Total: 0,
  },
  {
    Descricao: "Cartões vermelhos",
    Botafogo: 0,
    SaoPaulo: 0,
    Total: 0,
  },
];

export function ResultTable() {
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<MRT_ColumnDef<ILances>[]>(
    () => [
      {
        accessorKey: "Descricao",
        header: "Descrição",
      },
      {
        accessorKey: "Botafogo",
        header: "Botafogo",
      },
      {
        accessorKey: "SaoPaulo",
        header: "São Paulo",
      },
      {
        accessorKey: "Total",
        header: "Total",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: lances,
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