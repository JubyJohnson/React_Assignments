import { React, useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PostAndComments() {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);

  const fetchPostData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  };
  const fetchCommentData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComment(data);
      });
  };

  useEffect(() => {
    fetchPostData();
    fetchCommentData();
  }, []);

  return (
    <div>
      {post.map((item) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          {comment.map((item) => (
            <AccordionDetails>
              <Typography>{item.body}</Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
}

export default PostAndComments;