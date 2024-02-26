import useFetch from "./useFetch";

const Home = () => {
  const { data: tasks } = useFetch("http://localhost:8000/tasks");

  return (
    <div className="home">
      <h2>Tasks</h2>
      <div className="dropdown">
        <h3>Priority</h3>
        <div className="dropdown-content">
          <input
            style={{
              height: "5px",
              width: "5px",
              background: "red",
              border: "none",
            }}
          />
          <label>High</label>
          <input
            style={{
              height: "5px",
              width: "5px",
              background: "yellow",
              border: "none",
            }}
          />
          <label>Medium</label>
          <input
            style={{
              height: "5px",
              width: "5px",
              background: "green",
              border: "none",
            }}
          />
          <label>Low</label>
        </div>
      </div>
      {tasks
        ? tasks.map((task) => (
            <div className="tasks-list" key={task.id}>
              <input type="checkbox" />
              <h2>{task.name}</h2>
              <input
                className="box"
                style={{
                  height: "10px",
                  width: "10px",
                  background: task.color,
                }}
                disabled
              ></input>
            </div>
          ))
        : "Loading . . ."}
    </div>
  );
};

export default Home;
