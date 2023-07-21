import { Avatar, Checkbox, Button } from '@mui/material'
import styles from './TableComponent.module.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const rowItems = [1, 2, 3, 4]


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

function TableComponent() {

    return (
        <div>
            <div >
                <div className={styles.alterMenu}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search all contacts"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    {/* <div> */}
                        <p>Showing</p>
                        <Button>10</Button>
                        <p>of 54231 results</p>
                    {/* </div> */}
                </div>
                <div className={styles.thead}>
                    <p className={styles.th} style={{ width: '90px' }}><Checkbox /></p>
                    <p className={styles.th}>Contact Name</p>
                    <p className={styles.th}>Contact Details</p>
                    <p className={styles.th}>Company Name</p>
                    <p className={styles.th}>Contact Status</p>
                </div>
                <div>
                    {
                        rowItems.map(elem => <div key={elem} className={styles.tr} >
                            <div className={styles.td} style={{ width: '90px' }}><Checkbox /></div>
                            <div className={styles.td} style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}><Avatar /> Sparsh Jhariya</div>
                            <div className={styles.td}><p>sparsh3435@gmail.com</p> 9685233329<p></p></div>
                            <div className={styles.td} style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}><p>Apple Inc.</p> <OpenInNewIcon /></div>
                            <div className={styles.td} style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}> <DoneAllIcon /> <Button variant="contained" color="success" sx={{ borderRadius: '50px' }}>New </Button></div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}


export default TableComponent