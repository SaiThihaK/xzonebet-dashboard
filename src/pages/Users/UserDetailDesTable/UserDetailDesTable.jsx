import { Card, Grid, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./UserDetailDesTable.module.css"
import { Payment } from '@mui/icons-material'
const UserDetailDesTable = () => {
 const MenuItem = [
{
     name:"WithDraw"
},
{
    name:"Deposite"
}
]
  return (
    <PageTitleCard title="User Deposite/WithDraw">
        <div className={classes["card-body"]}>
        <Grid container spacing={3}>
        <Grid item xs={4}>
        <Card>
     <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',padding:"10px" }}
      component="nav"
    >
        {MenuItem.map((item,index)=>(
            <ListItemButton key={index} 
            sx={{marginBottom:1}}
            >
                <ListItemIcon>
                    <Payment className={classes["list-icon"]}/>
                </ListItemIcon>
                <ListItemText primary={item.name}  />
            </ListItemButton>
        ))}
    </List>
        </Card>
        </Grid>
        <Grid xs={8}>
            <Card>
                Hello
            </Card>
        </Grid>
        </Grid>
        </div>
    </PageTitleCard>
  )
}

export default UserDetailDesTable