import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie } from "recharts"

export default function PieChartComponent() {
  const chartConfig = {
    technologies: {
      label: "Technologies",
    },
    electronic: {
      label: "Electronic Technology",
      color: "hsl(var(--chart-1))",
    },
    services: {
      label: "Tech Services",
      color: "hsl(var(--chart-2))",
    },
    finance: {
      label: "Finance",
      color: "hsl(var(--chart-3))",
    },
    health: {
      label: "Health",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Others",
      color: "hsl(var(--chart-5))",
    },
  }
  const chartData = [
    { technology: "electronic", percentage: 30.30, fill: "#5F20C3" },
    { technology: "services", percentage: 30.30, fill: "#A39135" },
    { technology: "finance", percentage: 30.30, fill: "#2250A8" },
    { technology: "health", percentage: 10.30, fill: "#BD307B" },
    { technology: "other", percentage: 10.30, fill: "#2B9254" },
  ]
  return (
    <div className="font-noto">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie 
                data={chartData} 
                dataKey="percentage" 
                nameKey="technology" 
                innerRadius={60} 
                cornerRadius={5}
                labelLine={false}
                paddingAngle={5}
                label={({ payload, ...props }) => {
                    return (
                        <text
                            cx={props.cx}
                            cy={props.cy}
                            x={props.x}
                            y={props.y}
                            textAnchor={props.textAnchor}
                            dominantBaseline={props.dominantBaseline}
                            fill="white"
                            fontSize={12}
                        >
                            {
                                chartConfig[payload.technology as keyof typeof chartConfig]?.label.split(" ").map((label, index) => {
                                    return (
                                        <tspan x={props.x} y={props.y + (index * 16)}>{label}</tspan>
                                    )
                                })
                            }
                            <tspan x={props.x} y={props.y + (chartConfig[payload.technology as keyof typeof chartConfig]?.label.split(" ").length * 16)} fill="#888888">{`(${payload.percentage})`}</tspan>
                        </text>
                    )
                }}
            />
          </PieChart>
        </ChartContainer>
    </div>
  )
}