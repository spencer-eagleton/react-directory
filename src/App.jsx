import './App.css'; /* Global CSS */
import styles from './App.module.css';
 /* CSS Modules */
import Layout from './views/Layout/Layout';
import Welcome from './views/Welcome/Welcome';

export default function App() {
  return (
    <div
    
    >
      <Layout>
        <div className={`
    bg-gray-100
      text-3xl
      text-center
      rounded
    text-slate-600
      font-bold
      p-10
      w-1/2
      mx-auto
      mt-10
      ${styles.myCustomCssClass}
    `}>

        <Welcome />
        </div>
      </Layout>
    </div>
  );
}
