import { Avatar, Button } from '@mui/material'
import styles from './SideBarComponent.module.css'
import EditIcon from '@mui/icons-material/Edit';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { HouseOutlined, RocketLaunchOutlined } from '@mui/icons-material';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const menuItems = [
    {icon:<AccountCircleOutlinedIcon /> , name:'Contacts'},
    {icon:<HouseOutlined />, name:'Companies'},
    {icon:<BusinessCenterOutlinedIcon />,name:'Deals'}
]

function SideBarComponent(){
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Avatar />
                <p>Company Name</p>
            </div>
            <div style={{marginTop:'10px'}} className={styles.header}>
                <Button variant='contained' color = 'warning'> <EditIcon /> Create</Button>
                <PowerOutlinedIcon />
            </div>
            <p className={styles.heading}>Relationships</p>
            <div  className={styles.menu}>
                {
                    menuItems.map(elem => 
                    <div style={{display:'flex' , justifyContent:'space-between'}}>
                        <div style={{display:'flex' , alignItems:'center'}}>
                            <div style={{marginRight:'10px'}}>{elem.icon}</div>
                             <div>{elem.name} </div>
                            </div>
                        <div> <PlayArrowIcon /> </div>
                         </div>
                        )
                }
            </div>
            <p className={styles.heading}>Groups</p>
            <div style={{display:'flex' , alignItems:'center'}}>
                            <div style={{marginRight:'10px'}}><RocketLaunchOutlined /></div>
                             <div>Investor </div>
                            </div>
        </div>
        )
}


export default SideBarComponent