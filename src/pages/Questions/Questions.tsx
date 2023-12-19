/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack } from "@mui/material";
import React from "react";
import QnATitle from "../../common/QnATitle";
import QnAButtonGroup from "../../common/QnAButtonGroup";
import QnAQusetionCard from "../../common/QnAQusetionCard";
import QuestionsRightContent from "../../components/QuestionsRightContent";

const questionsDetails = [
  {
    id: 2,
    title: "Another testing question for Stack Overflow",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    counts: { votes: 2, answer: 2, verified: true, views: 20 },
    tags: [
      { id: 3, tag: "angular" },
      { id: 4, tag: "express" },
    ],
    userDetail: {
      user: "user@456",
      asked: 15,
      modifiedDate: "16-12-2023 2:45 pm",
    },
  },
  {
    id: 3,
    title: "Yet another testing question for Stack Overflow",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    counts: { votes: 3, answer: 3, verified: false, views: 30 },
    tags: [
      { id: 5, tag: "vue.js" },
      { id: 6, tag: "mongodb" },
    ],
    userDetail: {
      user: "user@789",
      asked: 20,
      modifiedDate: "11-12-2023 4:15 pm",
    },
  },
  {
    id: 4,
    title: "Introduction to React Hooks",
    description:
      "Learn the basics of React Hooks and how to use them in your projects.",
    counts: { votes: 5, answer: 4, verified: true, views: 50 },
    tags: [
      { id: 7, tag: "react" },
      { id: 8, tag: "javascript" },
    ],
    userDetail: {
      user: "user@101",
      asked: 25,
      modifiedDate: "06-12-2023 9:30 am",
    },
  },
  {
    id: 5,
    title: "RESTful API design best practices",
    description:
      "Explore best practices for designing RESTful APIs to ensure scalability and maintainability.",
    counts: { votes: 8, answer: 0, verified: false, views: 80 },
    tags: [
      { id: 9, tag: "api" },
      { id: 10, tag: "rest" },
    ],
    userDetail: {
      user: "user@202",
      asked: 30,
      modifiedDate: "12-05-2023 1:45 pm",
    },
  },
  {
    id: 6,
    title: "Getting started with Vue.js",
    description:
      "A beginner's guide to getting started with Vue.js and building interactive web applications.",
    counts: { votes: 3, answer: 2, verified: true, views: 35 },
    tags: [
      { id: 11, tag: "vue.js" },
      { id: 12, tag: "frontend" },
    ],
    userDetail: {
      user: "user@303",
      asked: 18,
      modifiedDate: "20-11-2023 3:00 pm",
    },
  },
  {
    id: 7,
    title: "Node.js backend optimization techniques",
    description:
      "Optimize your Node.js backend for better performance and scalability using proven techniques.",
    counts: { votes: 6, answer: 4, verified: false, views: 60 },
    tags: [
      { id: 13, tag: "node.js" },
      { id: 14, tag: "performance" },
    ],
    userDetail: {
      user: "user@404",
      asked: 22,
      modifiedDate: "21-10-2022 5:15 pm",
    },
  },
  // Add more objects as needed
];

const Questions = () => {
  // const theme = useTheme();
  return (
    <Stack direction={"row"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          p: "1.5rem",
        }}
      >
        <QnATitle title="All questions" />
        <Box
          sx={{
            alignSelf: "flex-end",
            paddingTop: "2rem",
            paddingBottom: "1rem",
          }}
        >
          <QnAButtonGroup />
        </Box>

        {questionsDetails.map((question: any) => (
          <QnAQusetionCard key={question} data={question} />
        ))}
      </Box>
      <Box sx={{ width: "30%" }}>
        <QuestionsRightContent />
      </Box>
    </Stack>
  );
};

export default Questions;
