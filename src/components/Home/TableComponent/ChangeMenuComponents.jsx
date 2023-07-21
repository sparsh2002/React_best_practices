import styles from './ChangeMenuComponent.module.css'
import React from 'react'
import { Button } from '@mui/material'
import ListIcon from '@mui/icons-material/List';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
const leftMenu = ['All Contacts' , 'Create Date' , 'Create Owner']


function ChangeMenuComponent(){
    return (
    <div className={styles.main}>
        <div className={styles.left}>
            {
                leftMenu.map(elem => <Button variant='outlined' sx={{marginRight:'4px' , color:'black', borderColor:'gray', textTransform:'capitalize'}}>{elem}</Button>)
            }
        </div>
        <div className={styles.right}>
            <ListIcon />
            <AlignVerticalTopIcon />
            <Button sx={{color:'black' ,textTransform:'capitalize' }}>Import </Button>
            <Button variant='contained' color='warning' sx={{boxShadow:'1px solid black'}}>Create Contact</Button>
        </div>
    </div>
    )
}


export default ChangeMenuComponent