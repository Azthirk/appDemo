import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#000000',
      alignItems: 'center',
      flexGrow: 1,
      marginTop: Constants.statusBarHeight,
    },
    containerBalance:{
        flexDirection: "column",
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor:"#1c1c1e",
        borderRadius:12,
        width:"90%",
        marginBottom:20,
    },
    containerBalanceButtons:{
        flexDirection: "row",
        justifyContent: 'center',
        borderRadius:12,
        width:"100%",
        marginBottom:15,
        marginTop:15,
    },
    menuAndProfile:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent: 'space-between',
        width:"90%",
        marginTop: 10,
        marginBottom: 10,
    },
    containerBalanceBox:{
        backgroundColor: '#323137',
        height: 59.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:12,
        width:"45%",
        marginLeft:5,
        marginRight:5,
    },
    textWhite:{
        color:"white",
        fontSize:13,
    },
    textBlue:{
        color:"#4F8EF7",
        fontSize:13,
    },
    textGray:{
        color:"#606062",
        fontSize:13,
    },
    textBalance:{
        color:"white",
        fontWeight:"bold",
        fontSize:28,
        marginTop: 10,
        marginBottom: 10,
    },
    textBoxs:{
        color:"white",
        fontSize:18,
    },
    textBoldWhite:{
        color:"white",
        fontSize:16,
        fontWeight:"500",
    },
    textBoldGreen:{
        color:"#22c993",
        fontSize:16,
        fontWeight:"500",
    },
    containerInfoandCopy:{
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 60,
    },
    containerInfo:{
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 120,
    },
    infoAndCash:{
        flexDirection: "column",
        alignItems:"center",
        justifyContent: 'center',
    },
    infoAndDate:{
        flexDirection: "column",
        justifyContent: 'center',
        marginLeft:5,
    },
    
  });