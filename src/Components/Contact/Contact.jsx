import css from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={css.container}>
      <h3>{name}</h3>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
