
import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  CircularProgress
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Images from "../../constants/images";
import ChatStyles from "../../styles/chat";
import ReXMessage from "../../components/RexMessage";
import api from "../../api/session";
import OpenAI from "openai";
import { useParams } from "react-router-dom";
import UserMessage from "../../components/UserMessage";
import useMediaQuery from "@mui/material/useMediaQuery";

const Chat = () => {
  const { id } = useParams();
  const [userPrompt, setUserPrompt] = useState("");
  const [rexReply, setReXReply] = useState("");
  const [sessions, setSessions] = useState([]);
  const [thisSession, setThisSession] = useState({});
  const [loading, setLoading] = useState(false);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
  const matches = useMediaQuery("(min-width:600px)");
  let chatKeys = [];

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");
        setSessions(response.data);
        setThisSession(
          response.data.find(
            (session) => parseInt(session?.id, 10) === parseInt(id, 10)
          )
        );
        window.addEventListener("scroll", handleScroll);
      } catch (err) {
        console.log(err);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    fetchSessions();
  }, [id]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator while waiting for response
    let updatedSession = {};

    // Call OpenAI API to get a response from ReX
    await callOpenAIAPI();

    // Format the date
    const date = new Date();
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    // Update session data with the new prompt and reply
    const newChat = { user: userPrompt, ReX: rexReply };
    thisSession.chats.push(newChat);
    updatedSession = {
      id: id,
      date: formattedDate,
      chats: thisSession.chats,
      isSessionEnded: thisSession.isSessionEnded,
    };

    try {
      const response = await api.patch(`sessions/${id}/`, updatedSession);
      setSessions(
        sessions.map((session) =>
          session.id === id ? response.data : session
        )
      );
      setUserPrompt(""); // Clear input field after submission
    } catch (err) {
      console.log(`Error: ${err.message}`);
    } finally {
      setLoading(false); // Hide loading indicator after response is received
    }
  };

  async function callOpenAIAPI() {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Your name is ReX. You are a career advice assistant. You give advice to user about his career as reply to his prompt. Limit your response to 100 words. You remember the previous conversations and details given by the user.",
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 100,
      });

      setReXReply(completion.choices[0].message.content);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  }

  return (
    <Grid container style={{ display: matches ? "none" : "block" }}>
      <Grid style={{ padding: "10px 10px 10px 10px", position: "sticky" }}>
        <img src={Images.HomeRex} alt="ReX" style={{ width: "30%" }} />
      </Grid>
      <Grid {...ChatStyles.textDisplayBackground}>
        <Grid>
          {thisSession?.chats?.length
            ? thisSession.chats.map((chat, i) =>
              Object.keys(chat).map((k) =>
                k === "ReX" ? (
                  <ReXMessage reXMessage={chat.ReX} key={"rex" + i} />
                ) : (
                  <UserMessage userMessage={chat.user} key={"user" + i} />
                )
              )
            )
            : null}
        </Grid>
        {thisSession && !thisSession.isSessionEnded ? (
          <Grid {...ChatStyles.toSendArea}>
            <Textarea
              {...ChatStyles.textArea}
              name="Soft"
              placeholder="Type a message to ReX ..."
              variant="soft"
              onChange={(e) => setUserPrompt(e.target.value)}
              value={userPrompt}
            />
            <Button {...ChatStyles.sendButton} onClick={handleSubmit} disabled={loading}>
              <img
                src={Images.SendButton}
                alt="send"
                {...ChatStyles.sendButtonImage}
              />
              {loading && <CircularProgress size={24} />}
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Chat;

