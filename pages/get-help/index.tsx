import Head from "next/head";
import type { ReactElement } from "react";
import AdminDashboardLayout from "../../src/components/adminLayout";

export default function WalletPage() {
  return (
    <div>
      <Head>
        <title>Support - kareem</title>
        <meta name="description" content="Kareem giftjar dashboard page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        Wallet page magni sapiente explicabo quis minima esse aperiam tenetur
        eligendi! Vero odit error officiis repellat earum cupiditate?
      </p>
    </div>
  );
}
WalletPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
