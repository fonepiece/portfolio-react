import DocumentMeta from 'react-document-meta';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './normalize-fwd.css';
import Main from './components/Main';
import ReactGA from 'react-ga4';

const meta = {
  title: 'Reyhan Taze | Personal Website',
  description: 'Elevate User Experiences – Dive into my UX design portfolio to explore captivating projects, innovative solutions, and user-centric experiences. Discover how I make digital interactions intuitive and delightful.',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'ux,designer,ui,html,css'
    }
  }
};

ReactGA.initialize('G-HQWKRBWVGW');

function App() {
  return (
    <DocumentMeta {...meta}>
      <a href="#main" className="screen-reader-text">Skip to content</a>
      <Main />
    </DocumentMeta>
  );
}

export default App;
