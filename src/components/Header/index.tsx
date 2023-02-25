import { ReactSVG } from 'react-svg';
import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss';

interface HeaderProps {

}

export function Header({ }: HeaderProps) {
  return (
    <div className={styles.container}>
      <ReactSVG src={logoImg} />
    </div>
  );
}