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
import { signUpSchema } from "@/lib/schema";
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
import { z } from "zod";

const Placeholder = {
  email: "example@mail.com",
  firstName: "Jonathan",
  lastName: "Smith",
  companyName: "okz ltd.",
};

const InputType = {
  email: "text",
  firstName: "text",
  lastName: "text",
  companyName: "text",
};

const LabelText = {
  email: "Title",
  firstName: "Category",
  lastName: "Description",
  companyName: "Company Name",
};

const UserForm = ({
  children,
  onSubmit,
  defaultValues,
}: {
  defaultValues?: UserFormType;
  children?: ReactNode;
  onSubmit: (value: UserFormType) => Promise<void>;
}) => {
  const method = useForm({
    resolver: zodResolver(
      signUpSchema.omit({ password: true }).extend({ companyName: z.string() })
    ),
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
            Add User <ArrowRightCircle />
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
        <AlertDialogHeader>
          <AlertTitle> User Form</AlertTitle>
        </AlertDialogHeader>

        <Form {...method}>
          <form
            className="flex flex-col items-center w-full gap-y-4  py-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex-1 flex flex-col max-h-96 overflow-y-scroll hide-scrollbar w-full h-full gap-y-4">
              <FormField
                control={control}
                name={"email"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["email"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["email"]}
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
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
                name={"companyName"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["companyName"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["companyName"]}
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
                        placeholder={Placeholder["companyName"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"firstName"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["firstName"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["firstName"]}
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
                        placeholder={Placeholder["firstName"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"lastName"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["lastName"]}</FormLabel>
                    <FormControl>
                      <Textarea
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
                        placeholder={Placeholder["lastName"]}
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
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default UserForm;
