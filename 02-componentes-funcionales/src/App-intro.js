
const MiComponente = ({miProp}) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}
const App = () => {
  return (
  <MiComponente miProp={'chanchito felix'} />
  );
}

export default App;
