import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { ILances } from "src/@types/ILances";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { useAppSelector } from "@store/hooks";

export function ResultTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const { data: dadosPartida } = useGetAllDadosPartida();
  const selectedTeam = useAppSelector(
    (selector) => selector.detailsMatch.selectedTeam
  );

  const columns = useMemo<MRT_ColumnDef<ILances>[]>(
    () => [
      {
        accessorKey: "Descricao",
        header: "Descrição",
      },
      {
        accessorKey: "Botafogo",
        header: selectedTeam.Equipe1,
      },
      {
        accessorKey: "SaoPaulo",
        header: selectedTeam.Equipe2,
      },
      {
        accessorKey: "Total",
        header: "Total",
      },
    ],
    [selectedTeam]
  );

  const table = useMaterialReactTable({
    columns,
    data: dadosPartida?.data.Lances ?? [],
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
