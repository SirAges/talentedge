"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { scheduleSchema, ScheduleSchemaType } from "@/lib/schema";
import { Textarea } from "./ui/textarea";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { ReactNode } from "react";
import { ArrowRightCircle, Loader2 } from "lucide-react";
import { AlertTitle } from "./ui/alert";

const Placeholder = {
  name: "joker Smith | jafer booking ltd",
  type: "individual | company",
  employeeCount: "number of employees",
  frequency: "number of section in a week",
  monthCount: "how many months",
  startDate: "4 oct, 2025",
  endDate: "28 dec, 2025",
  daysInWeek: "saturday | monday | thursday",
  timeInDay: "2:00pm",
  note: "urgently need my employees to catch up with work",
};

const InputType = {
  name: "text",
  type: "text",
  employeeCount: "number",
  frequency: "number",
  monthCount: "number",
  startDate: "date",
  endDate: "date",
  daysInWeek: "text",
  timeInDay: "time",
  note: "text",
};

const LabelText = {
  name: "Name",
  type: "Type",
  employeeCount: "Employees",
  frequency: "Frequency",
  monthCount: "months",
  startDate: "Starts",
  endDate: "Ends",
  daysInWeek: "Days",
  timeInDay: "time",
  note: "Note",
};

const ScheduleForm = ({
  children,
  onSubmit,
  defaultValues,
}: {
  defaultValues?: ScheduleSchemaType;
  children?: ReactNode;
  onSubmit: (value: ScheduleSchemaType) => Promise<void>;
}) => {
  const method = useForm({
    //@ts-expect-error unknown
    resolver: zodResolver(scheduleSchema),
    defaultValues: { ...defaultValues },
  });
  const {
    handleSubmit,
    control,
    formState: { disabled, isSubmitting, errors },
  } = method;
  console.log("errors", errors);
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {children ? (
          children
        ) : (
          <Button>
            Add Schedule <ArrowRightCircle />
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
        <AlertDialogHeader>
          <AlertTitle>Schedule Form</AlertTitle>
        </AlertDialogHeader>
        <Form {...method}>
          <form
            className="flex h-full flex-col items-center w-full gap-y-4  py-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex-1 flex flex-col max-h-96 overflow-y-scroll hide-scrollbar w-full h-full gap-y-4">
              <FormField
                control={control}
                name={"name"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["name"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["name"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["name"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <FormField
                  control={control}
                  name={"type"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["type"]}</FormLabel>
                      <FormControl>
                        <Input
                          type={InputType["type"]}
                          className=" placeholder:text-foreground/50"
                          placeholder={Placeholder["type"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name={"employeeCount"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["employeeCount"]}</FormLabel>
                      <FormControl>
                        <Input
                          type={InputType["employeeCount"]}
                          className=" placeholder:text-foreground/50"
                          placeholder={Placeholder["employeeCount"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-x-2">
                <FormField
                  control={control}
                  name={"frequency"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["frequency"]}</FormLabel>
                      <FormControl>
                        <Input
                          className=" placeholder:text-foreground/50"
                          placeholder={Placeholder["frequency"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={"monthCount"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["monthCount"]}</FormLabel>
                      <FormControl>
                        <Input
                          type={InputType["monthCount"]}
                          className=" placeholder:text-foreground/50"
                          placeholder={Placeholder["monthCount"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-x-2">
                <FormField
                  control={control}
                  name={"startDate"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["startDate"]}</FormLabel>
                      <FormControl>
                        <Input
                          type={InputType["startDate"]}
                          className=" placeholder:text-foreground/50"
                          placeholder={Placeholder["startDate"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={"endDate"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["endDate"]}</FormLabel>
                      <FormControl>
                        <Input
                          type={InputType["endDate"]}
                          className="flex-1  placeholder:text-foreground/50"
                          placeholder={Placeholder["endDate"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-x-2">
                <FormField
                  control={control}
                  name={"timeInDay"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["timeInDay"]}</FormLabel>
                      <FormControl>
                        <Input
                          type={InputType["timeInDay"]}
                          className=" placeholder:text-foreground/50 w-full"
                          placeholder={Placeholder["timeInDay"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={"daysInWeek"}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{LabelText["daysInWeek"]}</FormLabel>
                      <FormControl>
                        <Input
                          type={InputType["daysInWeek"]}
                          className=" placeholder:text-foreground/50"
                          placeholder={Placeholder["daysInWeek"]}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={control}
                name={"note"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["note"]}</FormLabel>
                    <FormControl>
                      <Textarea
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["note"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <AlertDialogCancel className="border-none flex-1">
                <Button variant={"destructive"}>Cancel</Button>
              </AlertDialogCancel>
              <Button
                disabled={disabled}
                type="submit"
                className="cursor-pointer"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Get a Demo"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ScheduleForm;
