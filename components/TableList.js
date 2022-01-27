import React, { useState, useEffect, Fragment,forwardRef } from "react";
import { makeStyles } from '@mui/styles';
import { DataGrid, useGridApiContext, useGridState ,GridToolbar } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import { Box ,TextField,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  disFlex: {
    display: 'flex',
    flexDirection: "column-reverse"
  },
});

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}



const QuickSearchToolbar = forwardRef((props) => (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto',
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 0.5,
          },
          '& .MuiInput-underline:before': {
            borderBottom: 1,
            borderColor: 'divider',
          },
        }}
      />
    </Box>
  ));
  



const options = {
  filterType: 'checkbox',
};
const columns = [
  {
    field: 'data',
    headerName: 'Categories',
    sortable: true,
    options:options,
    flex: 1,
    align: 'left',
    renderCell: (params) => (<>
        {params.value}
    </>),
  },
]
const axios = require('axios');
function CustomPagination() {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);
  const classes = useStyles();
  return (
    <Pagination
      className={classes.root}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

 

export default function TableList() {
  const classes = useStyles();

  const [list, setList] = useState([]);
  const [searchText, setSearchText] = React.useState('');
 
  
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);

    console.log('searchValue : '+ JSON.stringify(searchValue))

    if(searchValue !== ""){
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');

    const filteredRows = list.filter((row,i) => {

      return Object.values(row.data).some((field) => {
        const isSearch = searchRegex.test(row.data.toString())
        return isSearch
      });
    });
    setList(filteredRows);
  }else{
    get()
  }

  };

  React.useEffect(() => {
    setList(list);
  }, [list]);


  async function get() {

    await axios.get('https://api.publicapis.org/categories')
    .then(function (req, response) {
      console.log(req.data);
        const val = req.data;
        const result = val.map((item, i) =>({ "id":  i, "data": item,})
        )
        setList(result);
    })
    .catch(function (error) {
      console.log(error);
    })
  
  }

  const IsclearSearch = async() => {
    await  get();
    requestSearch('')
  }

    IsclearSearch.cre
     

  useEffect(() => {
    get(setList);
  }, [])

 


  return (
    <Fragment>
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          stickyHeader
          disableSelectionOnClick
          disableColumnMenu
          rows={list}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          components={{
            Pagination: CustomPagination,
            Toolbar: QuickSearchToolbar 
          }}
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event) => requestSearch(event.target.value),
              clearSearch: () => IsclearSearch(),
            },
          }}
        />
      </div>
    </Fragment>
  );
}
