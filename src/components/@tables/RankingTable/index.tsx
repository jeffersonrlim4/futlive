import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { ITopScore } from "src/@types/ITopScorer";

export function RankingTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const { data: dadosPartida } = useGetAllDadosPartida();

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
    data: dadosPartida?.data.Artilharia ?? [],
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
