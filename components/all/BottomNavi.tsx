import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import { useRouter } from 'next/router';

const BottomNavi = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  return (
    <div className="fixed bottom-0 sm:hidden">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
        showLabels
        className="w-96 max-w-md space-x-4"
      >
        <BottomNavigationAction
          value="/library"
          label="ライブラリ"
          icon={<LibraryBooksIcon />}
        />
        <BottomNavigationAction
          value="/search"
          label="本を探す"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          value="/settings"
          label="設定"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNavi;
