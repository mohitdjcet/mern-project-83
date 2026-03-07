function App() {
  const fruits = [];
  return (
    <div>
      <ul>
        {loading && (
          fruits.map((fruit, index) => <li key={fruit.id}>{fruit.name}</li>)
        )}
      </ul>
    </div>
  );
}
export default App;
