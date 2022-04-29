import React, { FC } from 'react';
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Button icon
   */
  children: React.ReactNode,
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?:() => void;
}

/**
 * Primary UI component for user interaction
 */
const IconButton:FC<IconButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  children,
  onClick
}: IconButtonProps) => {
    const mode = primary ? styles['iconButton--primary'] : styles['iconButton--secondary'];

    return (<button
      type="button"
      onClick={onClick}
      className={[styles.iconButton, styles[`iconButton--${size}`], mode].join(' ')}>
        {children}
      {label ? <span>{label}</span> : null}
    </button>
  );
}

export default IconButton;