function ListaDeTarefas(props) {
  return (
    <div>
      <h2>Lista de Tarefas</h2>

      {props.tarefas.length > 0 ? (
        <ul>
          {props.tarefas.map(function (tarefa, index) {
            return <li key={index}>{tarefa}</li>;
          })}
        </ul>
      ) : (
        <p>Nenhuma tarefa para exibir.</p>
      )}
    </div>
  );
}

export default ListaDeTarefas;