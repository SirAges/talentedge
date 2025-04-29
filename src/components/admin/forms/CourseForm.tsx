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
import { courseSchema, CourseSchemaType } from "@/lib/schema";
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
  title: "Strategic Leadership for Executives",
  category: "Leadership & Management",
  level: "Advanced",
  duration: "3 days",
  price: "85000",
  isFree: "false",
  description: "This intensive course is tailored for senior executives...",
  modules: "Organizational Visioning,Decision-Making Under Pressure",
};

const InputType = {
  title: "text",
  category: "text",
  level: "text",
  duration: "text",
  price: "number",
  isFree: "checkbox",
  description: "text",
  modules: "text",
};

const LabelText = {
  title: "Title",
  category: "Category",
  level: "Level",
  duration: "Duration",
  price: "Price",
  isFree: "Free",
  description: "Description",
  modules: "Modules",
};

const CourseForm = ({
  children,
  onSubmit,
  defaultValues,
}: {
  defaultValues?: CourseSchemaType;
  children?: ReactNode;
  onSubmit: (value: CourseSchemaType) => Promise<void>;
}) => {
  const method = useForm({
    resolver: zodResolver(courseSchema),
    defaultValues,
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
            Add Courses <ArrowRightCircle />
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
        <AlertDialogHeader>
          <AlertTitle> Course Form </AlertTitle>
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
                name={"category"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["category"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["category"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["category"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"level"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["level"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["level"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["level"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"duration"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["duration"]}</FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["duration"]}
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

              <FormField
                control={control}
                name={"modules"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["modules"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["modules"]}
                        className=" placeholder:text-foreground/50 w-full"
                        placeholder={Placeholder["modules"]}
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
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Continue"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default CourseForm;
