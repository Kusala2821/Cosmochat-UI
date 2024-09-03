import React, { useState } from "react"; 
import { Grid, Button } from "@mui/material"; 
import Images from "../../constants/images"; 
import ChatHistoryStyles from "../../styles/chatHistory"; 
import { useNavigate } from "react-router"; 
import Dialog from "@mui/material/Dialog"; 
import DialogActions from "@mui/material/DialogActions"; 
import DialogContent from "@mui/material/DialogContent"; 
import DialogContentText from "@mui/material/DialogContentText"; 
import DialogTitle from "@mui/material/DialogTitle"; 

/**
 * Component for rendering chat history entries.
 * @param {Object} props 
 * @param {string} props.id 
 * @param {string} props.date 
 * @param {string} props.lastChatText 
 * @param {boolean} props.sessionEnded 
 * @param {Function} props.handleDelete 
 * @param {boolean} props.isActivity 
 * @param {number} props.chatsLength 
 * @returns {JSX.Element} 
 */
const ChatHistory = ({
  id,
  date,
  lastChatText,
  sessionEnded,
  handleDelete,
}) => {
  const [dragged, setDragged] = useState(false); 
  const navigator = useNavigate(); 

  const [anchorEl, setAnchorEl] = useState(null); 
  const open = Boolean(anchorEl); 

  /**
   * Function to open the delete chat dialog.
   * @param {Event} event - The event object.
   */
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget); 
  };
  const handleClose = () => {
    setAnchorEl(null); 
  };

  const handleDrag = () => {
    setDragged((prev) => !prev); 
  };

  const handleLink = () => {
    navigator(`/sessions/${id}`); 
  };

  return (
    <>
      {/* Rendering for chat history entry */}
      <Grid
        container // The Grid container prop enables it to behave like a flexbox container.
        {...ChatHistoryStyles.chatHistoryContainer}
      >
        {/* Grid for displaying chat history entry */}
        <Grid
          item 
          {...ChatHistoryStyles.outLine}
          onDoubleClick={handleLink} 
          onClick={sessionEnded ? handleDrag : handleLink} 
          style={{ flex: dragged ? "6" : "7" }}
        >
          <Grid>
            <img src={Images.HomeRex} alt="ReX" style={{ width: "80px" }} /> {/* Image for chat history entry */}
          </Grid>
          {/* Conditional rendering for session end */}
          <Grid {...ChatHistoryStyles.bodyText}>
            {sessionEnded === true ? (
              <Grid {...ChatHistoryStyles.title}>ReX - {date}</Grid> 
            ) : (
              <Grid {...ChatHistoryStyles.title}>ReX</Grid> 
            )}
            <Grid {...ChatHistoryStyles.text}>{lastChatText}</Grid> {/* Body text of the chat history entry */}
          </Grid>
          {/* Conditional rendering for typing indicator */}
          {sessionEnded === false ? (
            <Grid paddingTop="25px">
              <img src={Images.Typing} alt="typing" /> {/* Typing indicator image */}
            </Grid>
          ) : null}
        </Grid>
        {/* Conditional rendering based on session end state */}
        <Grid
          item 
          sx={{ display: dragged ? "block": "none" , flex: "1"}} // Hides the grid item when not being dragged.
        >
          {/* Button to delete chat session */}
          <Button
            {...ChatHistoryStyles.deleteButton} 
            onClick={handleOpen} 
          >
            {/* Image for delete icon */}
            <img src={Images.Trash} alt="Delete" />
          </Button>
          {/* Dialog for confirming chat deletion */}
          <Dialog
            open={open} 
            onClose={handleClose} 
            aria-labelledby="responsive-dialog-title" 
            {...ChatHistoryStyles.popUp} 
            id="textClose" 
          >
            <DialogTitle id="responsive-dialog-title">
              {/* DialogTitle component is used to display the title of the dialog */}
              <img src={Images.HomeRex} alt="homeRex" /> {/* Image for dialog title */}
            </DialogTitle>
            <DialogContent>
              {/* DialogContent component is used to display the content area of the dialog */}
              <DialogContentText {...ChatHistoryStyles.popUpTextTitle}>
                Delete Chat? {/* Text for dialog content */}
              </DialogContentText>
              <DialogContentText>
                Are you sure you want to delete this ended chat? {/* Text for dialog content */}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* DialogActions component is a container for actions (buttons) within the dialog */}
              <Grid container {...ChatHistoryStyles.popUpButtons}>
                <Grid item>
                  <Button
                    onClick={handleDelete} // Event handler for confirming deletion.
                    {...ChatHistoryStyles.buttonDelete} // Applying styles for the delete button.
                  >
                    Yes, Delete {/* Text for delete button */}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleClose} // Event handler for canceling deletion.
                    {...ChatHistoryStyles.buttonCancel} // Applying styles for the cancel button.
                  >
                    Cancel {/* Text for cancel button */}
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};

export default ChatHistory; 
