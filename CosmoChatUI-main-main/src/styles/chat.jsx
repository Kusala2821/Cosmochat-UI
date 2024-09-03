/**
 * Object defining styles for chat components.
 */
const ChatStyles = {
  /** 
   * Style definition for the image in chat. 
  */
  chatImage: {
    sx: {
      display: "flex",
      justifyContent: "center",
      width: "5%",
      height: "5%",
      margin: "auto",
    }
  },
  /**
   * Style definition for the background of chat display area.
   */
  chatDisplayBackground: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Automatically adjusts height based on content.
       * Provides padding around the text display area.
       * Flexbox layout with columns, arranging child elements vertically.
       */
      height: "auto",
      padding: "10px 30px 200px",
      display: "flex",
      flexDirection: "column",
    },
  },
  /**
   * Style definition for the container of chats.
   */
  chatsContainer: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with columns, arranging child elements vertically.
       */
      display: "flex",
      flexDirection: "column",
    }
  },
  /**
   * Style definition for received messages.
   */
  reXMessage: {
    sx: {
      display: "flex",
      padding: "15px 20px", // Adjusted padding
      maxWidth: "80%", // Ensures the bubble doesn't take up the full width
      marginBottom: "15px", // Space between messages
      alignSelf: "flex-start",
      borderRadius: "20px",
      background: "#F0F0F0", // Light gray for ReX's message background
      color: "#000", // Black text color
    },
  },
  /**
   * Style definition for the text of received messages.
   */
  reXMessageText: {
    sx: {
      fontFamily: "Arial",
      fontSize: "16px",
      fontWeight: 500,
    },
  },
  userMessage: {
    sx: {
      display: "flex",
      padding: "15px 20px", // Adjusted padding
      maxWidth: "80%", // Ensures the bubble doesn't take up the full width
      marginBottom: "15px", // Space between messages
      alignSelf: "flex-end", // Aligns the user message to the right
      borderRadius: "20px", // Rounded corners
      background: "#5C67F2", // Purple/blue background for the user message
      color: "#FFF", // White text color
    },
  },
  /**
   * Style definition for the text of user messages.
   */
  userMessageText: {
    sx: {
      fontFamily: "Arial",
      fontSize: "16px",
      fontWeight: 500,
    },
  },
  /**
   * Style definition for the area to input and send messages.
   */
  toSendArea: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Defines the gap between child elements.
       * Sets the position of the send area to be fixed at the bottom.
       * Specifies the distance from the bottom of the viewport.
       * Sets the width of the send area.
       * Specifies margin for positioning.
       */
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      position: "fixed",
      bottom: 50,
      width: "90%",
    },
  },
  /**
   * Style definition for the text input area.
   */
  textArea: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the center.
       * Aligns content along the cross axis to the center.
       * Sets the width of the text input area.
       * Sets the height of the text input area.
       * Provides padding inside the text input area.
       * Defines the gap between child elements.
       * Specifies a flexible size for the text input area.
       * Adds rounded corners to the text input area.
       * Sets the background color of the text input area.
       */
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "auto",
      padding: "0px 20px",
      gap: "10px",
      flex: "1 0 0",
      borderRadius: "15px",
      background: "white",
    },
  },
  /**
   * Style definition for the send button.
   */
  sendButton: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Provides padding inside the send button.
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the center.
       * Aligns content along the cross axis to the center.
       * Defines the gap between child elements.
       * Adds rounded corners to the send button.
       * Sets the background color of the send button.
       */
      padding: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      borderRadius: "50%",
      background: "aqua",
    },
  },
  /**
   * Style definition for the image inside the send button.
   */
  sendButtonImage: {
    /**
     * Inline style object.
     */
    sx: {
      /*
       * Flexbox layout with rows, arranging child elements horizontally.
       * Aligns content along the main axis to the center.
       * Aligns content along the cross axis to the center.
       * Sets the width of the image inside the send button.
       * Sets the height of the image inside the send button.
       */
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "25px",
      height: "25px",
    },
  },
};

export default ChatStyles;
