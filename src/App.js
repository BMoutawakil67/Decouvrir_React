const { useState } = require("react");

function App() {
  const [Table, setTable] = useState([
    { id: 1, nom: "Mangue" },
    { id: 2, nom: "Avocat" },
    { id: 3, nom: "Papaye" }
  ]);

  const deleteTab = (id) => {
    const saveTab = [...Table];

    const updateTable = saveTab.filter((item) => item.id !== id);

    setTable(updateTable);
  };

  const [nomFruit, setNomFruit] = useState("");

  const ajouter = (event) => {
    event.preventDefault();

    let copyTable = [...Table];
    let id = new Date().getTime();
    let nom = nomFruit;
    copyTable.push({ id, nom });
    setTable(copyTable);
    setNomFruit("");
  };

  const update = (event) => {
    setNomFruit(event.target.value);
  };

  return (
    <div>
      <h2>Fruits</h2>
      {Table.map((element) => (
        <li key={element.id}>
          {element.nom} <button onClick={() => deleteTab(element.id)}>X</button>
        </li>
      ))}
      <form action="submit" onSubmit={ajouter}>
        <input onChange={update} value={nomFruit} type="text" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;
