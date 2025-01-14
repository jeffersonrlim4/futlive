import { useGetAllDadosPartida } from "@hooks/endpoints/dadosPartida/useGet/useGetAllDadosPartida";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { IClassification } from "src/@types/IClassification";
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";
import { Stack, Typography } from "@mui/material";
import { teamsImage } from "@constants/teams";
import { useStyles } from "./styles";
import { TableSkeleton } from "@components/Skeletons/TableSkeleton";

export function ChampionshipTable() {
  const styles = useStyles();
  const [globalFilter, setGlobalFilter] = useState("");
  const { data: dadosPartida, isLoading } = useGetAllDadosPartida();

  const columns = useMemo<MRT_ColumnDef<IClassification>[]>(
    () => [
      {
        accessorKey: "Posicao",
        header: "Posição",
      },
      {
        accessorKey: "Equipe",
        header: "Equipe",
        Cell: ({ cell }) => {
          const { Equipe } = cell.row.original;
          return (
            <Stack direction="row" spacing={2} sx={styles.team}>
              <img
                src={teamsImage[Equipe as keyof typeof teamsImage]}
                alt={Equipe}
                width={20}
                height={20}
              />
              <Typography>{Equipe}</Typography>
            </Stack>
          );
        },
      },
      {
        accessorKey: "Pontos",
        header: "P",
      },
      {
        accessorKey: "Jogos",
        header: "J",
      },
      {
        accessorKey: "Vitorias",
        header: "V",
      },
      {
        accessorKey: "Empates",
        header: "E",
      },
      {
        accessorKey: "Derrotas",
        header: "D",
      },
      {
        accessorKey: "GolsPro",
        header: "GP",
      },
      {
        accessorKey: "SaldoGols",
        header: "SG",
      },
    ],
    [styles]
  );

  const table = useMaterialReactTable({
    columns,
    data: dadosPartida?.data.ClassificacaoGrupo[0].Classificacao ?? [],
    defaultColumn: {
      size: 10,
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

  return isLoading ? <TableSkeleton /> : <MaterialReactTable table={table} />;
}
