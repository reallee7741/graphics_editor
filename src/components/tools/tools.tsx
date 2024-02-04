import React from 'react'
import Image from "next/image";
import styles from './tools.module.scss'

export default function tools(props: any) {
  return (
    <div className={styles.tools_panel}>
        <ul>
            <li>
                <Image
                    src="/pencil.svg"
                    width={20}
                    height={20}
                    alt="Pencil"
                    onClick={() => {props.onClick("black")}}
                />
            </li>
            <li>
                <Image
                    src="/eraser.svg"
                    width={20}
                    height={20}
                    alt="Eraser"
                    onClick={() => {props.onClick("white")}}
                />
            </li>
        </ul>
    </div>
  )
}
