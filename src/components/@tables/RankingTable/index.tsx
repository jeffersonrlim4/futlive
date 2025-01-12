import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { ITopScore } from "src/@types/ITopScorer";

const topScorer: ITopScore[] = [
  {
    Gols: 15,
    Jogador: "Alerrandro",
    Equipe: "Vitória",
  },
  {
    Gols: 15,
    Jogador: "Yuri Alberto",
    Equipe: "Corinthians",
  },
  {
    Gols: 13,
    Jogador: "Estêvão",
    Equipe: "Palmeiras",
  },
];

export function RankingTable() {
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo<MRT_ColumnDef<ITopScore>[]>(
    () => [
      {
        accessorKey: "Jogador",
        header: "Jogador",
      },
      {
        accessorKey: "Gols",
        header: "Gols",
      },
      {
        accessorKey: "Equipe",
        header: "Equipe",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: topScorer,
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
