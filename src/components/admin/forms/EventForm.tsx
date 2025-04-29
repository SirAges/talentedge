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
import { eventSchema, EventSchemaType } from "@/lib/schema";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowRightCircle, Loader2 } from "lucide-react";
import { AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { ReactNode } from "react";

const Placeholder = {
  id: 1,
  title: "2025 Leadership & Innovation Summit",
  description: "A high-level gathering of C-suite executives...",
  date: "2025-06-15",
  location: "Lagos Continental Hotel, Victoria Island",
  mode: "In-Person",
  isFree: "false",
  price: "250",
};

const InputType = {
  title: "text",
  date: "date",
  mode: "text",
  location: "text",
  price: "number",
  isFree: "checkbox",
  description: "text",
};

const LabelText = {
  title: "Title",
  location: "Location",
  date: "Date",
  mode: "Mode",
  price: "Price",
  isFree: "Free",
  description: "Description",
  modules: "Modules",
};

const EventForm = ({
  defaultValues,
  children,
  onSubmit,
}: {
  defaultValues?: EventSchemaType;
  children?: ReactNode;
  onSubmit: (value: EventSchemaType) => Promise<void>;
}) => {
  const method = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, disabled },
  } = method;
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {children ? (
          children
        ) : (
          <Button>
            Add Events <ArrowRightCircle />
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
        <AlertDialogHeader>
          <AlertTitle>Add Event Form </AlertTitle>
        </AlertDialogHeader>

        <Form {...method}>
          <form
            className="flex flex-col items-center w-full gap-y-4  py-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex-1 flex flex-col max-h-96 overflow-y-scroll hide-scrollbar w-full h-full gap-y-4">
              <FormField
                control={control}
                name={"title"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["title"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["title"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["title"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"date"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["date"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["date"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["date"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"mode"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["mode"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["mode"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["mode"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"location"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["location"]}</FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["location"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"price"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["price"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["price"]}
                        min={0}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["price"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"isFree"}
                render={({ field }) => (
                  <FormItem className="w-full flex items-center">
                    <FormLabel>{LabelText["isFree"]}</FormLabel>
                    <FormControl>
                      <Checkbox
                        className=" placeholder:text-foreground/50"
                        {...field}
                        value={String(field.value)}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"description"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["description"]}</FormLabel>
                    <FormControl>
                      <Textarea
                        className="flex-1  placeholder:text-foreground/50"
                        placeholder={Placeholder["description"]}
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
                <Button variant={"destructive"}>Cancel </Button>
              </AlertDialogCancel>
              <Button
                disabled={disabled}
                type="submit"
                className="cursor-pointer"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default EventForm;
