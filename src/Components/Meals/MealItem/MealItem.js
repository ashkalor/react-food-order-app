import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItems = (props) => {
  const price = `$${props.price}`;
  return (
    <li className={classes.meal} htmlFor={props.id}>
      <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
export default MealItems;
