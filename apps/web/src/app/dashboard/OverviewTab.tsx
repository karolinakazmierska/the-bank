import { Suspense } from "react";
import {
  BarChartIcon,
  CommitIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { formatValue } from "@the-bank/core";

import { serverAPIClient } from "~/utils/serverAPIClient";
import CardInfo from "~/components/CardInfo";
import { Overview } from "~/components/Overview";
import { RecentSales } from "~/components/RecentSales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default async function OverviewTab() {
  const { totalVolume, transactionCount, userCount, avgTransaction } =
    await serverAPIClient().admin.overviews();

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardInfo
          title="Total Volume"
          value={formatValue({ value: totalVolume })}
          icon={<BarChartIcon className="h-8 w-8 text-green-500" />}
          caption="+20.1% from last month"
        />

        <CardInfo
          title="Total Transactions"
          value={transactionCount}
          icon={<RocketIcon className="h-8 w-8 text-green-500" />}
          caption="+10.12% from last month"
        />
        <CardInfo
          title="Avg Transaction Value"
          value={formatValue({ value: avgTransaction })}
          icon={<CommitIcon className="h-8 w-8 text-green-500" />}
          caption="+50.82% from last month"
        />
        <CardInfo
          title="Total Users"
          value={userCount}
          icon={<PersonIcon className="h-8 w-8 text-green-500" />}
          caption="+5.12% from last month"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Users made 265 transactions this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <RecentSales />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </>
  );
}