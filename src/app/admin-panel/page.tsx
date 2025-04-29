"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Line,
  LineChart,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
} from "recharts";

import { schedules } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
const Page = () => {
  const chartConfig = {
    month: { label: "Month: ", color: "var(--chart-1)" },
    count: { label: "Count: ", color: "var(--chart-1)" },
  } satisfies ChartConfig;
  const chartData = [
    { month: "January", count: 3 },
    { month: "Febuary", count: 6 },
    { month: "March", count: 30 },
    { month: "April", count: 12 },
    { month: "May", count: 16 },
    { month: "June", count: 20 },
    { month: "July", count: 12 },
  ];
  const chartConfigPie = {
    schedule: {
      label: "Schedule",
    },
    count: {
      label: "Count",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;
  const chartDataPie = [
    { count: "count", schedule: schedules.length, fill: "var(--color-3)" },
  ];
  return (
    <div className="h-screen w-full px-10 py-10 space-y-10">
      <div className="flex h-[40vh] items-center justify-between">
        <ChartContainer
          className="h-full flex-1 py-2"
          config={chartConfig}
        >
          <AreaChart
            accessibilityLayer
            data={[
              { month: "January", count: 3 },
              { month: "Febuary", count: 6 },
              { month: "March", count: 30 },
              { month: "April", count: 12 },
              { month: "May", count: 16 },
              { month: "June", count: 20 },
              { month: "July", count: 12 },
            ]}
            margin={{ left: 10, right: 10, top: 10 }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="line"
                  className="px-2 py-2 gap-2"
                />
              }
              cursor={false}
            />

            <Area
              dataKey="count"
              type="natural"
              fill="var(--chart-3)"
              radius={10}
            />
          </AreaChart>
        </ChartContainer>
        <ChartContainer
          config={chartConfigPie}
          className="h-full flex-1 py-2"
        >
          <RadialBarChart
            data={chartDataPie}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar
              dataKey="schedule"
              background
              cornerRadius={10}
            />
            <PolarRadiusAxis
              tick={false}
              tickLine={false}
              axisLine={false}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartDataPie[0].schedule.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Schedules
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </div>
      <Separator />
      <div className="h-[40vh] flex items-center gap-x-5">
        <ChartContainer
          className="h-full flex-1 py-2"
          config={chartConfig}
        >
          <BarChart
            accessibilityLayer
            data={[
              { month: "January", count: 3 },
              { month: "Febuary", count: 6 },
              { month: "March", count: 30 },
              { month: "April", count: 12 },
              { month: "May", count: 16 },
              { month: "June", count: 20 },
              { month: "July", count: 12 },
            ]}
            margin={{ left: 10, right: 10, top: 10 }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="line"
                  className="px-2 py-2 gap-2"
                />
              }
              cursor={false}
            />

            <Bar
              dataKey="count"
              type="natural"
              fill="var(--primary)"
              radius={10}
            />
          </BarChart>
        </ChartContainer>
        <ChartContainer
          className="h-full flex-1 py-2"
          config={chartConfig}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 10, right: 10, top: 10 }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="line"
                  className="px-2 py-2 gap-2"
                />
              }
              cursor={false}
            />

            <Line
              dataKey="count"
              type="natural"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{ fill: "var(--accent)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};
export default Page;
