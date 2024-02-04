import React from 'react'
import styles from './palette.module.scss'
export default function palette(props: any) {
  return (
    <div className={styles.palette}>
        <ul>
            <li className={styles.black} onClick={() => {props.onClick("black")}}></li>
            <li className={styles.white} onClick={() => {props.onClick("white")}}></li>
            <li className={styles.yellow} onClick={() => {props.onClick("yellow")}}></li>
            <li className={styles.orange} onClick={() => {props.onClick("orange")}}></li>
            <li className={styles.red} onClick={() => {props.onClick("red")}}></li>
            <li className={styles.purple} onClick={() => {props.onClick("purple")}}></li>
            <li className={styles.blue} onClick={() => {props.onClick("blue")}}></li>
            <li className={styles.green} onClick={() => {props.onClick("green")}}></li>
        </ul>
    </div>    
  )
}
