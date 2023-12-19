/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Stack,
  Typography,
  styled,
  Chip,
  useTheme,
  Link,
  Theme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

import moment from "moment/moment";
import React, { useLayoutEffect } from "react";

// function formatTimeAgo(timestamp) {
// 	const now = moment().locale("en-GB");
// 	const date = moment(timestamp, "DD-MM-YYYY h:mm a");

// 	// Check if the date is today
// 	if (date.isSame(now, "day")) {
// 		const minutesAgo = now.diff(date, "minutes");
// 		return `${minutesAgo} min ago`;
// 	}

// 	// Check if the date is within the current week
// 	if (date.isSame(now, "week")) {
// 		return date.locale("en-GB").format("dddd");
// 	}

// 	// If more than a week ago, return the date in the format "DD-MMM-YYYY"
// 	return date.locale("en-GB").format("MMM DD, YYYY [at] hh:mm");
// }

function formatTimeAgo(timestamp) {
  const now = moment();
  const date = moment(timestamp, "DD-MM-YYYY h:mm a");

  // Check if the date is today
  if (date.isSame(now, "day")) {
    const minutesAgo = now.diff(date, "minutes");
    if (minutesAgo < 60) {
      return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
    } else {
      const hoursAgo = now.diff(date, "hours");
      return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
    }
  }

  // Check if the date is yesterday
  if (date.isSame(now.clone().subtract(1, "day"), "day")) {
    return "Yesterday";
  }

  // Check if the date is within the current week
  if (date.isSame(now, "week")) {
    return date.locale("en-GB").format("dddd");
  }

  // If more than a week ago but within 3 weeks, return the days ago
  if (now.diff(date, "weeks") < 3) {
    const daysAgo = now.diff(date, "days");
    return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  }

  // If more than 3 weeks ago but within 1 month, return the weeks ago
  if (now.diff(date, "months") < 1) {
    const weeksAgo = now.diff(date, "weeks");
    return `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago`;
  }

  // If more than 1 month ago, return the date in the format "MMM DD, YYYY"
  return date.locale("en-GB").format("MMM DD, YYYY [at] hh:mm");
}

const StyledCountText = styled(Typography)(
  ({
    answer,
    varified,
    theme,
  }: {
    answer?: boolean;
    varified?: boolean;
    theme: any;
  }) => ({
    width: "auto",
    textAlign: "end",
    border: answer ? `1px solid ${theme.palette.success.main}` : `none`,
    backgroundColor: varified ? theme.palette.success.main : "none",
    paddingLeft: "0.4rem",
    paddingRight: "0.4rem",
    borderRadius: "0.2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color:
      answer && !varified
        ? theme.palette.success.main
        : varified
          ? theme.palette.primary.contrastText
          : theme.palette.grey[400],
  }),
);

const StyledSubTitle = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  color: theme.palette.grey[400],
}));

// const StyledTagChip = styled(Chip)(({ theme }) => ({}));

// const StyledTitle = styled()

const GroupTag = ({ tags }: { tags: any[] }) => (
  <Stack direction={"row"} gap={1} justifyContent={"flex-start"} width={"100%"}>
    {tags.map((tag) => (
      <Chip key={tag.id} color="primary" variant="filled" label={tag.tag} />
    ))}
  </Stack>
);

const QusetionAskDetail = ({ user }: { user: { [key: string]: string } }) => (
  <Stack
    direction={"row"}
    gap={1}
    justifyContent={"flex-end"}
    width={"100%"}
    alignItems={"center"}
  >
    <Typography variant="subtitle2" fontWeight={"medium"} color={"primary"}>
      {user?.user}
    </Typography>
    <Typography variant="subtitle2" color={"grey.400"}>
      <span style={{ fontWeight: "bold" }}>{user?.asked}</span> asked
    </Typography>
    <Typography variant="subtitle2" fontWeight={"normal"} color={"grey.400"}>
      {/* {formatTimeAgo(new Date(user?.modifiedDate))} */}
      {formatTimeAgo(user?.modifiedDate)}
    </Typography>
  </Stack>
);

const QnAQusetionCard = ({ data }: { data: any }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const pathNameVal = location.pathname;
    console.log({ pathNameVal });
  }, [location]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginLeft: `-1.5rem`,
        py: 2,
        borderTop: `1px solid ${theme.palette.grey[600]}`,
      }}
    >
      <Stack
        direction={"column"}
        gap={1}
        width={"15%"}
        marginRight={"1.4rem"}
        alignItems={"flex-end"}
      >
        <StyledCountText variant="subtitle2">
          {data?.counts?.votes} votes
        </StyledCountText>
        <StyledCountText
          answer={!!data?.counts?.answer}
          varified={data?.counts?.verified}
          variant="subtitle2"
        >
          {data?.counts?.verified && (
            <CheckIcon
              fontSize="small"
              sx={{ height: "16.8px", paddingRight: "0.2rem" }}
            />
          )}
          {data?.counts?.answer} answers
        </StyledCountText>
        <StyledCountText variant="subtitle2">
          {data?.counts?.views} views
        </StyledCountText>
      </Stack>
      <Stack direction={"column"} flexGrow={1}>
        {/* path="/question/:id" */}
        <Link
          underline="none"
          variant="h6"
          gutterBottom
          onClick={() => navigate(`/question/${data.id}`)}
          sx={{
            width: "auto",
            color: "primary.contrastText",
            "&:hover": { cursor: "pointer", color: theme.palette.grey[300] },
          }}
        >
          {data?.title}
        </Link>
        <StyledSubTitle variant="subtitle2" gutterBottom>
          {data?.description}
        </StyledSubTitle>
        <Stack direction={"row"} gap={1} justifyContent={"space-between"}>
          <GroupTag tags={data?.tags} />
          <QusetionAskDetail user={data?.userDetail} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default QnAQusetionCard;
