import styles from "./register.module.css";
import Link from "next/link";

const RegisterView = () => {
  return (
    <div className={styles.container}>
      <h1>Halaman Register</h1>

      <input type="text" placeholder="Username" className={styles.input}/>
      <input type="password" placeholder="Password" className={styles.input}/>

      <button className={styles.button}>Register</button>

      <Link href="/auth/login">Kembali ke Login</Link>
    </div>
  );
};

export default RegisterView;