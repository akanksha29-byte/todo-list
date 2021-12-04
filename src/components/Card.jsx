const Card = ({ task }) => {
  return (
    <div className="card">
      <h4>
        {task.task} <span>{task.date}</span>
      </h4>

      <button>Delete</button>
    </div>
  );
};

export default Card;
