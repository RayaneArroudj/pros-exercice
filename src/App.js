import './App.css';
import Cube from './Cube';

function App() {
  return (
    <div className="containerapp">
      <Cube
        name={'ItemA'}
        color={'blue'}
        width={'150px'}
        height={'150px'}
        rounded
      />
      <Cube
        name={'ItemB'}
        color={'red'}
        width={'150px'}
        height={'150px'}
        rounded
      />
      <Cube name={'ItemC'} color={'green'} width={'100px'} height={'100px'} />
      <Cube
        name={'ItemC'}
        color={'yellow'}
        width={'200px'}
        height={'200px'}
        rounded
      />
    </div>
  );
}

export default App;
