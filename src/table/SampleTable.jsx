import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';

const sampleData = [
  {
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    firstName: 'Joe',
    lastName: 'Doe',
  },
  {
    firstName: 'Kevin',
    lastName: 'As',
  },
  {
    firstName: 'Joshua',
    lastName: 'As',
  },
];

function SampleTable() {
  // data and fetching state
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  // table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const fetchData = async () => {
    if (!data.length) {
      setIsLoading(true);
    } else {
      setIsRefetching(true);
    }

    // const url = new URL(
    //     '/api/data',
    //     'https://www.material-react-table.com',
    // );
    // url.searchParams.set(
    //     'start',
    //     `${pagination.pageIndex * pagination.pageSize}`,
    // );
    // url.searchParams.set('size', `${pagination.pageSize}`);
    // url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
    // url.searchParams.set('globalFilter', globalFilter ?? '');
    // url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

    try {
      // const response = await fetch(url.href);
      setData(sampleData);
      setRowCount(5);
    } catch (error) {
      setIsError(true);
      return;
    }
    setIsError(false);
    setIsLoading(false);
    setIsRefetching(false);
  };

  useEffect(() => {
    fetchData();
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      // column definitions...
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableTopToolbar={false}
      enableColumnActions={false}
      getRowId={(row) => row.phoneNumber}
      enableRowSelection
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: 'error',
              children: 'Error loading data',
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting,
      }}
    />
  );
}

export default SampleTable;
