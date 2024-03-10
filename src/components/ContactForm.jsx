import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import * as images from "../assets/assets";

const ContactForm = ({ darkStyle }) => {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const submitButtonEnabled = consent && name && mail && tel && message;

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  const bgImage = darkStyle ? images.bg1 : images.bg3;

  return (
    <Box
      sx={{
        px: theme.spacing(19.75),
        py: theme.spacing(6),
        width: "100%",
        height: "100%",
        // height: "50vh",
        // paddingTop: "calc(100% * (788 /1920))",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          pt: theme.spacing(2),
          textAlign: "center",
          color: "white",
          fontSize: "3.66rem",
          lineHeight: "5.19rem",
        }}
      >
        {t("contactTitle")}
      </Typography>
      <Typography
        sx={{
          py: theme.spacing(5.5),
          textAlign: "center",
          color: "white",
          fontSize: "0.85rem",
        }}
      >
        {t("contactSubtitle")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3.5}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label={t("contactName")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              // variant="filled"
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& label.Mui-focused": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
              }}
            />
            <TextField
              fullWidth
              label={t("contactEmail")}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              // variant="filled"
              margin="normal"
              required
              type="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& label.Mui-focused": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
              }}
            />
            <TextField
              id="tel"
              fullWidth
              label={t("contactPhone")}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              // variant="filled"
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& label.Mui-focused": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label={t("contactMessage")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              // variant="filled"
              margin="normal"
              required
              multiline
              rows={isNarrowScreen ? 3 : 8}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& label.Mui-focused": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                  fontFamily: "h1",
                  fontSize: "1.03rem",
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                name="consent"
                color="primary"
                sx={{
                  "&.Mui-checked": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              />
            }
            sx={{
              py: theme.spacing(4),
              justifyContent: "center",
              display: "flex",
              "& .MuiTypography-root": {
                color: "white",
                fontFamily: "h1",
                fontSize: "1.03rem",
              },
            }}
            label={
              <span>
                {t("contactCheckbox")}
                <span style={{ color: "white" }}>*</span>
              </span>
            }
          />
        </Grid>
        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Button
            disabled={!submitButtonEnabled}
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "none",
              backgroundColor: "white",
              width: "314px",
            }}
          >
            <Typography
              color={theme.palette.primary.main}
              textAlign="center"
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {t("contactSubmit")}
            </Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
