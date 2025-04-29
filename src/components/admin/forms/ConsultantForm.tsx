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
import { consultantSchema, ConsultantSchemaType } from "@/lib/schema";
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
import { ReactNode } from "react";

const Placeholder = {
  name: "Dr. Chidi Okafor",
  title: "Organizational Development Specialist",
  bio: "Dr. Chidi Okafor is a seasoned organizational development...",
  qualifications:
    "Ph.D. in Organizational Psychology, University of Lagos, Certified Change Management Professional (CCMP), Senior Member, Nigerian Institute of Management",
  expertise:
    "Organizational Development, Change Management, Leadership Development, Employee Engagement",
  email: "chidi.okafor@consulting.com",
  phone: "+234 123 456 7890",
  linkedIn: "https://www.linkedin.com/in/chidiokafor",
};

const InputType = {
  name: "text",
  title: "text",
  bio: "text",
  qualifications: "text",
  expertise: "text",
  email: "text",
  phone: "text",
  linkedIn: "text",
};

const LabelText = {
  name: "Name",
  title: "Title",
  bio: "Bio",
  qualifications: "Qualifications",
  expertise: "Expertise",
  email: "Email",
  phone: "Phone",
  linkedIn: "Linkedin",
};

const ConsultantForm = ({
  children,
  onSubmit,
  defaultValues,
}: {
  defaultValues?: ConsultantSchemaType;
  children?: ReactNode;
  onSubmit: (value: ConsultantSchemaType) => Promise<void>;
}) => {
  const method = useForm({
    resolver: zodResolver(consultantSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, disabled, errors },
  } = method;
  console.log("errors", errors);
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {children ? (
          children
        ) : (
          <Button>
            Add Consultant <ArrowRightCircle />
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
        <AlertDialogHeader>
          <AlertTitle>Consultant Form</AlertTitle>
        </AlertDialogHeader>

        <Form {...method}>
          <form
            className="flex flex-col items-center w-full gap-y-4  py-2"
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
                name={"bio"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["bio"]}</FormLabel>
                    <FormControl>
                      <Textarea
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["bio"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"qualifications"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["qualifications"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["qualifications"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["qualifications"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"expertise"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["expertise"]}</FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["expertise"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"email"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["email"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["email"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["email"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"phone"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["phone"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["phone"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["phone"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"linkedIn"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["linkedIn"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["linkedIn"]}
                        className="flex-1  placeholder:text-foreground/50"
                        placeholder={Placeholder["linkedIn"]}
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
export default ConsultantForm;
