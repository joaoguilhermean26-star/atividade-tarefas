import ListaDeTarefas from "./ListaDeTarefas";

function App() {
  var tarefas = ["Estudar React", "Fazer a atividade de SQL", "Revisar Packet Tracer"];
  var tarefasVazia = [];

  return (
    <div>
      {/* lista com itens */}
      <ListaDeTarefas tarefas={tarefas} />

      {/* lista vazia, aparece a mensagem */}
      <ListaDeTarefas tarefas={tarefasVazia} />
    </div>
  );
}

export default App;