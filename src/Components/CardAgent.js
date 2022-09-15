import React from 'react'
import styles from '../Styles/Agents.module.css'


const CardAgent = (props) => {

const data = props.data
  
  return (
    <div className={styles.containerCard}>
    <img className={styles.imgCard} src={data.displayIcon} />
    <h1>{data.displayName}</h1>
    </div>

  )
}

export default CardAgent