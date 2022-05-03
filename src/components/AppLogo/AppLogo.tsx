import React, { FC } from 'react';
import styles from './AppLogo.module.scss';

interface AppLogoProps {
  /**
   *  App logo icon
   */
  children?: React.ReactNode,
  /**
   * App logo name
   */
  name?: string
  /**
   * Additional styles for app name
   */
  styleForName?: React.CSSProperties
  /**
   * Optional click handler
   */
  // onClick?:() => void;
}
// todo: Need added onClick handler to the logo;

const AppLogo:FC<AppLogoProps> = ({
  children,
  name = 'enigma',
  styleForName = {textTransform: 'capitalize'},
  // onClick
}: AppLogoProps) => (
    <div style={{ display: "flex", alignItems: 'center', cursor: 'pointer' }}>
      {children || null}
      {name ? <h1 className={styles.logoName} style={styleForName}>{name}</h1> : null}
    </div>
  );


export default AppLogo;