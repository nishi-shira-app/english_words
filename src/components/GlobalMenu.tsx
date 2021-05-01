import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TextFormatIcon from '@material-ui/icons/TextFormat';


interface GlobalMenuProps {
  currentPage: string,
  changeCurrentPage: (val:pageNames) => void
}

const GlobalMenu:React.FC<GlobalMenuProps> = props => {

  const style:React.CSSProperties = {
    position:'fixed',
    bottom:0,
    width: '100%',
  }

  return (
    <BottomNavigation
      showLabels={true}
      style={style}
      onChange={(event, newValue:pageNames) => {
        props.changeCurrentPage(newValue);
      }}
    >
      <BottomNavigationAction showLabel={true} label='Word' value='WordPage' icon={<TextFormatIcon />} />
      <BottomNavigationAction showLabel={true} label='Grammer1' value='WordGrammerPage'icon={<TextFieldsIcon />} />
      <BottomNavigationAction showLabel={true} label='Grammer2' value='GrammerPage'icon={<TextFieldsIcon />} />
    </BottomNavigation>
  );
}

export default GlobalMenu;