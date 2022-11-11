import DocumentMeta from 'react-document-meta';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';

const meta = {
  title: 'Reyhan Taze',
  description: 'Front End Web developer and designer, Reyhan Taze portfolio website',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'ux,designer,ui,html,css'
    }
  }
};

function App() {
  return (
    <DocumentMeta {...meta}>
      <Main />
    </DocumentMeta>
  );
}

export default App;
