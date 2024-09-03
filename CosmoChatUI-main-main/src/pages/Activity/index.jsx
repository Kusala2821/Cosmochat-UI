
import React, { useEffect, useState } from "react";
import api from "../../api/session";
import {
  Grid,
  CircularProgress,
  Typography,
  Link
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import ActivityStyles from "../../styles/activity";
import AllStyles from "../../styles/home";
import ChatHistory from "../../components/ChatHistory";

const Activity = () => {
  const [loading, setLoading] = useState(true);
  const [sessionDates, setSessionDates] = useState([]);
  const [sessionChatLengths, setSessionChatLengths] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");
        const reversedSessions = response.data.reverse();
        setSessions(reversedSessions);
        
        // Extract session dates and chat lengths
        const dates = reversedSessions.map(session => session.date);
        const chatLengths = reversedSessions.map(session => session.chats.length);

        setSessionDates(dates);
        setSessionChatLengths(chatLengths);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching sessions:', err);
      }
    };
    fetchSessions();
  }, []);

  return (
    <Grid container {...ActivityStyles.activityBody}>
      <Grid container item {...ActivityStyles.titleOutline}>
        <Typography {...ActivityStyles.title}>Your Statistics</Typography>
      </Grid>
      <Grid container item>
        <Typography {...ActivityStyles.description}>
          Graph of the conversation you had with ReX.
        </Typography>
      </Grid>
      <Grid container item>
        {loading ? (
          <CircularProgress />
        ) : (
          <BarChart
            xAxis={[{ scaleType: "band", data: sessionDates }]}
            series={[{ data: sessionChatLengths }]}
            width={500}
            height={300}
          />
        )}
      </Grid>
      <Grid container item {...AllStyles.endedChatsTitle}>
        <Grid {...AllStyles.endedChats}>Details Chat Activity</Grid>
        <Grid>
          <Link {...AllStyles.seeAllLink} href="/activityDetails">
            See All
          </Link>
        </Grid>
      </Grid>
      <Grid>
        {loading ? (
          <CircularProgress />
        ) : (
          sessions.map((session, i) =>
            session.isSessionEnded && i < 4 ? (
              <ChatHistory
                key={session.id}
                id={session.id}
                date={session.date}
                lasttext={
                  session.chats.length > 0
                    ? session.chats[session.chats.length - 1].ReX.slice(-1)[0]
                    : "No messages"
                }
                sessionEnded={session.isSessionEnded}
                isActivity={true}
              />
            ) : null
          )
        )}
      </Grid>
    </Grid>
  );
};

export default Activity;


