// Import necessary components and hooks from React and Material-UI
import React, { useEffect, useState } from "react"; // Importing React and useState and useEffect hook for state management.
import { Link } from "react-router-dom"; // Importing the Link Component from react-router-dom.
import {
  Button, // Material-UI Button component for clickable buttons
  CircularProgress, // Material-UI CircularProgress component for loading spinners
  Grid, // Material-UI Grid component for layout
  Typography, // Material-UI Typography component for text
} from "@mui/material";
import Images from "../../constants/images"; // Importing image constants
import AllStyles from "../../styles/home"; // Importing custom styles
import api from "../../api/session"; // Importing API utility for session management
import ChatHistory from "../../components/ChatHistory"; // Importing ChatHistory component
import { useNavigate } from "react-router"; // Importing useNavigate hook for navigation
import useMediaQuery from "@mui/material/useMediaQuery"; // Importing useMediaQuery hook for responsive design

/**
 * Home component for displaying and managing chat sessions
 * @returns {JSX.Element} JSX element representing the Home component
 */
function Home() {
  // State to manage the list of sessions
  const [sessions, setSessions] = useState([]);
  const navigator = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(true);
  const reXIntro = [
    "Hello User, I am ReX. 😁",
    "What aspect of your career would you like guidance on?",
  ];
  // Array representing months for date formatting
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  useEffect(() => {
    const controller = new AbortController();
    // Async function to fetch sessions
    const fetchSessions = async () => {
      try {
        // Fetching sessions from the API
        const response = await api.get("/sessions", {
          signal: controller.signal, 
        });

        console.log("response = ", response);
        setSessions(response.data.reverse());
        setLoading(false);
      } catch (err) {
        console.log(err);
        // Error handling
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
      return () => controller?.abort();
    };
    fetchSessions();
  }, []);
  const handleSubmit = async () => {
    const id = sessions.length
      ? (parseInt(sessions[0].id) + 1).toString()
      : "1";
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = months[month] + " " + day + ", " + year;
    const chat = [{ ReX: reXIntro }];
    const isSessionEnded = false;
    const newSession = {
      id,
      date: formattedDate,
      chats: chat,
      isSessionEnded,
    };

    try {
      if (parseInt(id) > 1) {
        const lastSessionid = (parseInt(id) - 1).toString();
        const activeSession = sessions.filter(
          (session) => session.id === lastSessionid
        );
        activeSession[0].isSessionEnded = true;
        const res = await api.patch(
          `/sessions/${lastSessionid}`,
          activeSession[0]
        );
        setSessions(
          sessions.map((session) =>
            session.id === lastSessionid ? res.data : session
          )
        );
      }
      const response = await api.post("/sessions", newSession);
      const allSessions = [...sessions, response.data];
      setSessions(allSessions);
      navigator(`/sessions/${id}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/sessions/${id}`);
      setSessions(sessions.filter((session) => session.id !== id));
    } catch (err) {
      // Error handling
      console.log(`Error: ${err.message}`);
    }
  };

  return (
     (
      <Grid container /* style={{ display: matches ? "none" : "block" }} */>
        {loading ? (
          <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        ) : sessions.length === 0 ? (
          <Grid item {...AllStyles.homeBody}>
            <Grid>
              <img src={Images.HomeRex} alt="homeRex" />
            </Grid>
            <Grid className="greetings">
              <Typography {...AllStyles.greetings}>
                Welcome, User! 👋
              </Typography>
            </Grid>
            <Grid>
              <Typography {...AllStyles.message}>
                Start a conversation with ReX right now!
              </Typography>
            </Grid>
            <Grid>
              <Button {...AllStyles.startChatButton} onClick={handleSubmit}>
                <Typography {...AllStyles.startChatButtonText}>
                  Start Chat With ReX
                </Typography>
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid item >
            <Grid {...AllStyles.ChatsTitle}>
              <Grid {...AllStyles.ChatsTitleText}>Active Chats</Grid>
            </Grid>
            <Grid>
              {sessions.length
                ? sessions.map((session) =>
                    !session.isSessionEnded ? (
                      <ChatHistory
                        key={session.id}
                        id={session.id}
                        date={session.date}
                        lastChatText={
                          session?.chats?.length > 0
                            ? session.chats[session.chats.length - 1].ReX.slice(0,100)
                            : ""
                        }
                        sessionEnded={session?.isSessionEnded}
                        handleDelete={null}
                      />
                    ) : null
                  )
                : null}
            </Grid>
            {/* For ended chats */}
            <Grid {...AllStyles.ChatsTitle}>
              <Grid {...AllStyles.ChatsTitleText}>Ended Chats </Grid>
              <Grid>
                <Link {...AllStyles.seeAllLink} to="/endedChats">
                  See All
                </Link>
              </Grid>
            </Grid>
            <Grid>
              {sessions.map((session, i) =>
                session.isSessionEnded && i < 4 ? (
                  <ChatHistory
                    key={session.id}
                    id={session.id}
                    date={session.date}
                    session
                    lastChatText={
                      session?.chats?.length > 0
                              ? session?.chats[session.chats.length - 1].ReX.slice(0,100)
                              : ""
                    }
                    sessionEnded={session.isSessionEnded}
                    handleDelete={() => handleDelete(session.id)}
                  />
                ) : null
              )}
            </Grid>
            {/* For start Chat button */}
            <Grid {...AllStyles.startAnotherChatButtonGrid}>
              <Button {...AllStyles.startChatButton} onClick={handleSubmit}>
                <Typography {...AllStyles.startChatButtonText}>
                  Start Another Chat With ReX
                </Typography>
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    )
  );
}

export default Home;
