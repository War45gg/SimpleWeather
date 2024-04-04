import React from 'react'
import styles from './WeatherParam.module.css'

export default function WeatherParam({title,value}) {
  return (
    <div className={styles.bodyParam}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.value}>{value}</span>
    </div>
  )
}
