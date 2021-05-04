import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItemText, ListItemIcon } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

interface SideMenuProps {
  parts: string[];
  currentPart: string;
  changeCurrentPart: (val:string) => void;
}

const SideMenu: React.FC<SideMenuProps> = props => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleDrawer = () => {
    setMenuToggle(!menuToggle);
  };

  const parts = props.parts;

  const useStyles = makeStyles({
    list: {
      width: '50vw',
    }
  });

  const classes = useStyles();

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={() => toggleDrawer()}
      />
      <Drawer
        anchor='right'
        open={menuToggle}
        onClose={() => setMenuToggle(false)}
      >
        <div className={classes.list}>
          <CloseIcon
            onClick={() => setMenuToggle(false)}
          />
          <List component="nav" aria-label="secondary part">
            {
              parts.map(p => {
                return (
                  <ListItem 
                    button
                    onClick={() => {
                      props.changeCurrentPart(p);
                      setMenuToggle(false);
                    }}
                    key={p}
                  >
                    <ListItemText primary={p}/>
                    <ListItemIcon>
                      {
                        p === props.currentPart
                        &&
                        <CheckIcon />
                      }
                    </ListItemIcon>
                  </ListItem>
                )
              })
            }
          </List>
          <Divider />
        </div>
      </Drawer>
      <MenuIcon />
    </>
  );
}

export default SideMenu;