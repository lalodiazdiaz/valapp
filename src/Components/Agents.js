import styles from "../Styles/Agents.module.css";
import CardAgent from "./CardAgent";

const Agents = (props) => {
  const dataAgents = props.data;

  return (
    <div className={styles.containerAgents}>
      {dataAgents.map((agent, i) => (
        <CardAgent key={i} data={agent} />
      ))}
    </div>
  );
};

export default Agents;
