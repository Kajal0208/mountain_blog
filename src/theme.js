import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const theme=createMuiTheme({
    palette:{
        primary:{
            main:"#764abc"
        }
      
    },
    background:{
        default:"#fff"
    }
})

const useStyles = makeStyles((theme) => ({
    appBar:{
      backgroundColor:"#fff"
    },
    hero:{
      backgroundImage:`Linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://i0.wp.com/namastaytraveling.com/wp-content/uploads/2017/04/cropped-mountains-header-3-1.jpg?fit=4554%2C1457&ssl=1')`,
      height:"500px",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      position:"relative",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      color:"#fff",
      fontsize:"40rem",
      [
        theme.breakpoints.down("sm")
      ]:{
        height:300,
        fontsize:"3em"
      }
  
    },
    blogsContainer:{
      paddingTop:theme.spacing(3),
  
    },
    blogTitle:{
      fontWeight:800,
      paddingBottom:theme.spacing(3),
  
    },
    card:{
      maxWidth:"100%",
      
    },
    media:{
      height:240
    },
    CardActions:{
      display:"flex",
      margin:"0 10px",
      justifyContent:"space-between"
    },
    author:{
      display:"flex",
  
    }
  
  }));

export default theme;
export {useStyles};