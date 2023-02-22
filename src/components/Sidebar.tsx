import styles from './Sidebar.module.css';

import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/josileudo.png"/>

        <strong>Josileudo Rodrigues</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#"> 
          <PencilLine size={20} /> 
          Editar meu perfil
        </a>
      </footer>
    </aside>
  )
}