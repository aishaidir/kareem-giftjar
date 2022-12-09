import { Tab, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { useState } from "react";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AdminDashboardLayout from "../../src/components/adminLayout";
import { PageTitle } from "../../src/components/form/textFields/styles";
// import WithdrawalVerificationCode from "../../src/components/views/wallet/withdraw";
import { Colors } from "../../src/theme/colors";
import { Fonts } from "../../src/theme/fonts";
import Withdrawal from "../../src/components/views/wallet/widthdrawal";

export default function WalletPage() {
  const router = useRouter();
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Head>
        <title>Dashboard - kareem</title>
        <meta name="description" content="Kareem giftjar dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle color={theme.palette.mode === "dark" ? "#fff" : "#000"}>
        Balance
      </PageTitle>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          my: { xs: 3, sm: 2 },
        }}
      >
        <Box
          component="div"
          sx={{
            width: 250,
            px: 3,
            py: { xs: 1, sm: 1.5 },
            font: `normal normal 400 15px/18px ${Fonts.secondary}`,
            background:
              theme.palette.mode === "dark" ? Colors.gredient : Colors.black,
            color:
              theme.palette.mode === "dark"
                ? Colors.black
                : Colors.secondaryLight,
            border: "1.13394px solid #000000",
            borderRadius: "7.93757px",
          }}
        >
          Gift Balance
          <Box
            component="span"
            sx={{
              width: "100%",
              display: "block",
              font: {
                xs: `normal normal 400 15px/30px ${Fonts.secondary}`,
                sm: `normal normal 400 22px/46px ${Fonts.secondary}`,
              },
              color: "#FBFBFF",
            }}
          >
            ₦ 800,000.00
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: { xs: "center", sm: "flex-end" },
          position: { xs: "absolute", sm: "relative" },
          left: "auto",
          top: { sm: 0 },
          bottom: { xs: 28 },
          cursor: "pointer",
        }}
      >
        <Withdrawal />
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 3,
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "#E5E7EB",
              // borderRadius: "9999px",
              zIndex: 1,
            }}
          >
            <TabList
              onChange={handleChange}
              sx={{
                color: theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                "& .MuiTabs-indicator": {
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                },
              }}
            >
              <Tab
                label="Contributions"
                value="1"
                sx={{
                  font: `normal normal 800 14px/36px ${Fonts.secondary}`,
                  color:
                    theme.palette.mode === "dark" ? Colors.light : Colors.black,
                  textTransform: "none",
                  "& .MuiTabs-indicator": {
                    color:
                      theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                  },
                  "&.Mui-selected": {
                    color:
                      theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                  },
                  "&.Mui-focusVisible": {
                    color:
                      theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                  },
                }}
              />
              <Tab
                label="Withdrawals"
                value="2"
                sx={{
                  font: `normal normal 800 14px/36px ${Fonts.secondary}`,
                  color:
                    theme.palette.mode === "dark" ? Colors.light : Colors.black,
                  textTransform: "none",
                  "& .MuiTabs-indicator": {
                    color:
                      theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                  },
                  "&.Mui-selected": {
                    color:
                      theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                  },
                  "&.Mui-focusVisible": {
                    color:
                      theme.palette.mode === "dark" ? "#FEB044" : "#F34114",
                  },
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">Contributions</TabPanel>
          <TabPanel value="2">Withdrawals</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
WalletPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
