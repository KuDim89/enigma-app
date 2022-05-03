import React, { FC } from 'react';

import styles from './Header.module.scss';
import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';


import { DarkMode, EnigmaLogo, LightMode } from '../../assets';
import { useTheme } from '../../hooks';
import AppLogo from '../AppLogo/AppLogo';

// todo: Need configure theme with colors ['#FF5E13', '#002244'];

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}


export const Header: FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  const {theme, setTheme} = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  }

  const handleDarkThemeClick = () => {
    setTheme('dark');
  }

  return (
    <header>
      <div className={styles.wrapper}>
        <AppLogo styleForName={{textTransform: 'capitalize'}}>
          <EnigmaLogo color='#FF5E13' width={48} height={50}/>
        </AppLogo>
        <div style={{ display: "flex", alignItems: 'center' }}>
          {theme === "dark" ?
          <IconButton primary label="Click me!" size="small" onClick={handleLightThemeClick}>
            <LightMode color='#FF5E13' />
          </IconButton> :
          <IconButton primary label="Click me!" size="small" onClick={handleDarkThemeClick}>
            <DarkMode color='#FF5E13' />
          </IconButton>}
          <div className={styles.separator} />
          {user ? (
            <Button size="small" onClick={onLogout} label="Log out" />
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
            </>
          )}
        </div>
      </div>
    </header>
  )
};
