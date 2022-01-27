import React, { useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, List  } from '@mui/material';
import Link from 'next/link'
import LocalMallIcon from '@mui/icons-material/LocalMall';


function ListItems() {
  const [open, setOpen] = useState({
    masterData : false,
    marketing : false,
    limousine: false
  });
  const handleClick = (e) => {
    const name = e;
    setOpen(prev => ({...prev , [name] : !open.name} ));
  };

  return (
    <>
    <List className="linkListItem">
      <Link href="/">
        <a style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText primary="test" />
          </ListItem>
        </a>
      </Link>


      </List>
    </>
  );
}

export default ListItems;
