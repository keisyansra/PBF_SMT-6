import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
        <img 
        src="/page-not-found.png.svg" 
        alt="404" className={styles.error__image}></img>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang anda cari tidak ditemukan</p>

      <Link href="/">
        <button className={styles.error__button}>
          Kembali ke Home
        </button>
      </Link>
    </div>
  );
};

export default Custom404;