import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { ITopScore } from "src/@types/ITopScorer";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { useStyles } from "./styles";
import { teamsImage } from "@constants/teams";
import { Stack, Typography } from "@mui/material";

export function RankingTable() {
  const styles = useStyles();
  const [globalFilter, setGlobalFilter] = useState("");
  const { data: dadosPartida } = useGetAllDadosPartida();

  const columns = useMemo<MRT_ColumnDef<ITopScore>[]>(
    () => [
      {
        accessorKey: "Jogador",
        header: "Jogador",
        Cell: ({ cell }) => {
          const { Equipe, Jogador } = cell.row.original;
          return (
            <Stack direction="row" spacing={2} sx={styles.team}>
              <img
                src={teamsImage[Equipe as keyof typeof teamsImage]}
                alt={Equipe}
                width={20}
                height={20}
              />
              <Typography>{Jogador}</Typography>
            </Stack>
          );
        },
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
    [styles]
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
