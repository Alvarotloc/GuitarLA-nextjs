import Entrada from "../components/Entrada"
import styles from '../styles/Blog.module.css'
import { IBlog } from '../pages/blog';

const ListadoBlog = ({entradas}:IBlog): JSX.Element => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entradas.map((entrada) => (
          <Entrada key={entrada._id} entrada={entrada} />
        ))}
      </div>
    </>
  );
};

export default ListadoBlog;
