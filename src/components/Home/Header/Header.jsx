import styles from './Header.module.css'
import Avatar from '@mui/material/Avatar';
import React from 'react'

const menuItems = ['All Contacts' , 'My Contacts' , 'Source' , 'Highlight', 'Visible Fields' , 'Campaign', 'Search']

function Header() {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
         {
          menuItems.map(elem => <p className={styles.item}>{elem}</p>)
         }
        </div>
        <div className={styles.right}>
          <Avatar alt="Remy Sharp" />
        </div>
    </div>
  )
}

export default Header