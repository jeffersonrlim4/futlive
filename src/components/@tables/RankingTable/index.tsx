import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { ITopScore } from "src/@types/ITopScorer";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";

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
    defaultColumn: {
      muiTableBodyCellProps: { sx: { textAlign: "center" } },
      muiTableHeadCellProps: {
        sx: {
          ".Mui-TableHeadCell-Content": {
            justifyContent: "center",
          },
        },
      },
    },
    localization: MRT_Localization_PT_BR,
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
