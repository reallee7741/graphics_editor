import React from 'react';
import styles from './actionsPanel.module.scss';

export default function actionsPanel(props: any) {

  const canvas = props.canvas;
  
  // Save image to PNG
  function saveImg() {
    var link = document.createElement('a');
    link.setAttribute('download', 'SavedCanvas.png');
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
  }

  return (
    <div className={styles.actions}>
        <div id={styles.save} onClick={saveImg}>Сохранить</div>
    </div>
  )
}
