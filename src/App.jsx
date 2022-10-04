import Title from './components/Title';
import Card from './components/Card';

import './assets/scss/app.scss';

function App() {
  return (
    <main className="app-wrapper">
      <Title title={'SPLITTER'} />
      <Card />
    </main>
  );
}

export default App;
