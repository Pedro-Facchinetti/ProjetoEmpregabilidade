import styles from './Nav.module.scss';
import BarraDePesquisa from 'Components/BarraDePesquisa';
import Dropdown from 'Components/Dropdown';

function Nav() {
  return (
    <div className={styles.Nav}>
      <BarraDePesquisa />
      <Dropdown
        options={['Estagiário', 'Júnior', 'Sênior', 'Pleno', 'Outro']}
        placeholder="Nível de experiência"
      />
      <Dropdown
        options={['Estagiário', 'Júnior', 'Sênior', 'Pleno', 'Outro']}
        placeholder="Nível de experiência"
      />
      <Dropdown
        options={['Estagiário', 'Júnior', 'Sênior', 'Pleno', 'Outro']}
        placeholder="Nível de experiência"
      />
      <Dropdown
        options={['Estagiário', 'Júnior', 'Sênior', 'Pleno', 'Outro']}
        placeholder="Nível de experiência"
      />
    </div>
  );
}

export default Nav;
