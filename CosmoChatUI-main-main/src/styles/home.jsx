
/**
 * Object defining styles for chat components.
 */
const AllStyles = {
  /**
   * Style definition for the navigation bar.
   */
  navigationBar: {
    /**
     * Inline style object.
     */
    sx: {
      
      display: "flex",
      flexDirection: "row",
      padding: "15px",
      justifyContent: "space-between",
      alignItems: "center",
      background: "white",
      position: "sticky",
      top: "0",
      width: "100%",
      zIndex: 100,
    },
  },
  
  navigationRight: {
     
    sx: {
      
      display: "flex",
      justifyContent: "space-between",
      width: "auto",
    },
  },
   
  navigationLeft: {
    
    sx: {
      
      display: "flex",
      justifyContent: "space-between",
      width: "80%",
    },
  },
   
  navigationName: {
     
    sx: {
      
      width: "80%",
      color: "black",
      fontFamily: "Arial",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      textAlign: "left",
    },
  },
  
  homeBody: {
    
    sx: {
      
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "20px",
    },
  },
   
  greetings: {
     
    sx: {
       
      display: "flex",
      color: "black",
      fontFamily: "Arial",
      fontSize: "25px",
      fontStyle: "normal",
      fontWeight: 700,
      margin: "20px",
    },
  },
  
  message: {
    
    sx: {
       
      color: "black",
      textAlign: "center",
      fontFamily: "Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      margin: "20px",
    },
  },
  
  startChatButton: {
     
    sx: {
      
      display: "flex",
      padding: "20px",
      borderRadius: "100px",
      background: "darkblue",
      height: "50%",
      textTransform: "capitalize",
      ":hover": {
        textDecoration: "none",
        background: "darkblue",
      },
    },
  },
   
  startChatButtonText: {
     
    sx: {
      
      width: "100%",
      color: "white",
      fontFamily: "Arial",
      background: "darkblue",
      fontSize: "16px",
      fontWeight: 700,
    },
  },
   
  ChatsTitleText: {
     
    sx: {
      
      color: "black",
      fontFamily: "Arial",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "120%",
      textAlign: "left",
    },
  },
   
  ChatsTitle: {
    
    sx: {
      
      display: "flex",
      justifyContent: "space-between",
      padding: "25px",
    },
  },
   
  startAnotherChatButtonGrid: {
    
    sx: {
       
      display: "flex",
      padding: "25px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
    },
  },
   
  optionsMenu: {
     
    sx: {
       
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      alignItems: "flex-end",
      gap: "16px",
      width: "100%",
    },
  },
   
  optionsMenuItem: {
    
    sx: {
       
      padding: "20px",
      color: "black",
      fontFamily: "Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
    },
  },
   
  seeAllLink: {
    
    style: {
       
      color: "blue",
      textAlign: "right",
      fontFamily: "Arial",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
      textDecoration: "none",
    },
  },
   
  widthErrorStyle: {
     
    sx: {
       
      padding: "15px",
      height: "100vh",
      fontFamily: "Arial",
      fontSize: "16px",
    },
  }
};

export default AllStyles;
