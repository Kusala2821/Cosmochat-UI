import React, { useState, useEffect } from "react";  
import { 
  Grid, 
  Typography // Material-UI Typography component for text
} from "@mui/material";
import ChatHistory from "../../components/ChatHistory"; 
import api from "../../api/session"; 
import useMediaQuery from "@mui/material/useMediaQuery"; 
import WidthError from "../../components/WidthError"; 
import AllStyles from "../../styles/home"; 

/**
 
 * @returns {JSX.Element} 
 */
const EndedChats = () => {
  const [sessions, setSessions] = useState([]);
  const matches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");
        if (response && response.data) {
          setSessions(response.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
    };
    fetchSessions();
  }, []);

  
  /**
   * Function to handle deletion of a session. 
   * This function sends a delete request to the server to delete the session with the specified ID.
   
   * @param {string} id 
   */
  const handleDelete = async (id) => {
    try {
      // Convert id to string
      const ID = id.toString();
      // Send delete request to the server
      await api.delete(`/sessions/${ID}`);
      // Update the sessions state to remove the deleted session
      setSessions(sessions.filter((session) => session.id !== ID));
    } catch (err) {
      // Error handling
      console.log(`Error: ${err.message}`);
    }
  };

  // Returning JSX for EndedChats component
  return (
    // If the screen size is more than 600px, display WidthError component, else display content
    matches ? (
      <WidthError />
    ) : (
      // Grid container for the main layout
      <Grid container>
        <Grid {...AllStyles.ChatsTitle}>
          <Typography {...AllStyles.ChatsTitleText}>
            Ended Chats
          </Typography>
        </Grid>
        <Grid container>
          {/* Mapping over sessions to display ended chats */}
          {sessions.map((session) =>
            session.isSessionEnded ? (
              <ChatHistory
                key={session.id}
                id={session.id}
                date={session.date}
                lastChatText={
                  session?.chats?.length > 0
                          ? session?.chats[session.chats.length - 1].ReX.slice(0,100)
                          : ""
                }
                sessionEnded={session.isSessionEnded}
                handleDelete={() => handleDelete(session.id)}
                isActivity={false}
                chatsLength={session.chats.length}
              />
            ) : null
          )}
        </Grid>
      </Grid>
    )
  );
};


export default EndedChats;
