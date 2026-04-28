import { useRouter } from 'next/router';
import Navbar from "../Navbar";


const disableNavabar = ['/auth/login', '/auth/register'];


type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main>
      <Navbar />
      {children}
      <div>
        footer
      </div>
    </main>
  );
};

export default AppShell;