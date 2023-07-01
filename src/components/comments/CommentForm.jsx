import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendHandler = () => {
    if (name && email && email) {
      sendComment();
      setIsPressed(true);
    } else {
      toast.warn("تمام فیلدها را پر کنید", {
        position: "top-center",
      });
    }
  };

  if (data && isPressed) {
    toast.success("کامنت ارسال شد و در انتظار تایید می‌باشد", {
      position: "top-center",
    });
    setIsPressed(false);
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(event) => setText(event.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button
            style={{ fontFamily: "inherit" }}
            variant="contained"
            disabled
          >
            در حال ارسال
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ fontFamily: "inherit" }}
            onClick={sendHandler}
          >
            ارسال کامنت
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
