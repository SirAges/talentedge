"use client";
import ScheduleForm from "@/components/SheduleForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteSchedule,
  getAllSchedules,
  updateSchedule,
} from "@/lib/actions/schedule.actions";
import { ScheduleSchemaType } from "@/lib/schema";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Delete,
  Edit,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const [scheduleId, setScheduleId] = useState<string>("");
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);

  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<number | null>(null);
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data, nextPage } = await getAllSchedules({
        page,
        order,
      });
      setNextPage(nextPage);
      setSchedules(data);
    };
    fetchData();
    return () => {};
  }, [page, order]);
  const handleUpdate = async (data: ScheduleSchemaType) => {
    try {
      const { message } = await updateSchedule({ scheduleId, data });
      toast(message);
    } catch (error) {
      //@ts-expect-error error type
      if (error?.data) {
        //@ts-expect-error error type
        toast(error?.data?.message);
      }
    }
  };
  return (
    <div className="pl-5 ">
      <div className="bg-background flex items-center justify-between  sticky top-0 z-50 h-14 px-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
          <ArrowUpDown
            onClick={() =>
              setOrder((prev) => (prev === "desc" ? "asc" : "desc"))
            }
            className="cursor-pointer"
            size={14}
          />
        </div>
        <div className="flex-1 px-4">
          <Input
            name="search"
            placeholder="search schedules"
            value={search}
            onChange={handleSearch}
            className="max-w-72 py-3 px-2 bg-background"
          />
        </div>

        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
            <ArrowLeft
              onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
              className="cursor-pointer"
              size={14}
            />
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
            <ArrowRight
              onClick={() => setPage(nextPage!)}
              className="cursor-pointer"
              size={14}
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll hide-scrollbar  max-h-[calc(100vh-3rem)]">
        <Table>
          <TableHeader>
            <TableRow>
              {[
                "name",
                "type",
                "Employee Count",
                "Start Date",
                "End Date",
                "Month Count",
                "frequency",
                "Days In Week",
                "Time In Day",
                "note",
                "contact",
                "actions",
              ].map((key) => (
                <TableHead
                  className={cn("text-start capitalize")}
                  key={key}
                >
                  {key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.map(
              ({
                id,
                userId,
                contact,
                daysInWeek,
                employeeCount,
                endDate,
                frequency,
                monthCount,
                name,
                note,
                startDate,
                timeInDay,
                type,
              }) => (
                <TableRow key={id}>
                  <TableCell
                    title={name}
                    className="truncate"
                  >
                    {name}
                  </TableCell>
                  <TableCell title={type}>{type}</TableCell>
                  <TableCell title={employeeCount.toString()}>
                    {employeeCount}
                  </TableCell>
                  <TableCell title={startDate}>{startDate}</TableCell>
                  <TableCell title={endDate}>{endDate}</TableCell>
                  <TableCell title={monthCount.toString()}>
                    {monthCount}
                  </TableCell>
                  <TableCell title={frequency.toString()}>
                    {frequency}
                  </TableCell>
                  <TableCell title={daysInWeek}>{daysInWeek}</TableCell>
                  <TableCell title={timeInDay}>{timeInDay}</TableCell>
                  <TableCell
                    title={note}
                    className="max-w-60 truncate"
                  >
                    {note}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-x-2">
                      <Phone
                        onClick={() => router.push(`tel:${contact.phone}`)}
                        size={16}
                        className="text-chart-2 cursor-pointer"
                      />
                      <Mail
                        onClick={() => router.push(`mailto:${contact.email}`)}
                        size={16}
                        className="text-chart-5 cursor-pointer"
                      />
                      <Linkedin
                        onClick={() => router.push(contact.linkedIn)}
                        size={16}
                        className="text-primary cursor-pointer"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <ScheduleForm
                      defaultValues={{
                        contact,
                        daysInWeek,
                        employeeCount,
                        endDate,
                        frequency,
                        monthCount,
                        name,
                        note,
                        startDate,
                        timeInDay,
                        type,
                      }}
                      onSubmit={handleUpdate}
                    >
                      <Button
                        onClick={() => setScheduleId(id)}
                        variant={"link"}
                        className="hover:no-underline"
                      >
                        Edit
                        <Edit />
                      </Button>
                      <Button
                        onClick={() => deleteSchedule({ userId })}
                        variant={"link"}
                        className="text-destructive hover:no-underline"
                      >
                        Delete
                        <Delete />
                      </Button>
                    </ScheduleForm>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default Page;
