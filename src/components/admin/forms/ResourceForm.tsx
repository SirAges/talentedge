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
import { resourceSchema, ResourceSchemaType } from "@/lib/schema";
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
  title: "Employee Onboarding Checklist",
  type: "Checklist",
  description: "A comprehensive step-by-step onboarding...",
  format: "PDF",
  access: "Free",
};

const InputType = {
  title: "text",
  type: "text",
  description: "text",
  format: "text",
  access: "text",
};

const LabelText = {
  title: "Title",
  type: "Type",
  description: "Description",
  format: "Format",
  access: "Access",
};

const ResourceForm = ({
  children,
  onSubmit,
  defaultValues,
}: {
  defaultValues?: ResourceSchemaType;
  children?: ReactNode;
  onSubmit: (value: ResourceSchemaType) => Promise<void>;
}) => {
  const method = useForm({
    resolver: zodResolver(resourceSchema),
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
            Add Resources <ArrowRightCircle />
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
        <AlertDialogHeader>
          <AlertTitle>Add Resources Form</AlertTitle>
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
                name={"description"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["description"]}</FormLabel>
                    <FormControl>
                      <Textarea
                        className=" placeholder:text-foreground/50"
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
                name={"format"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["format"]}</FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["format"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={"access"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["access"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["access"]}
                        className=" placeholder:text-foreground/50"
                        placeholder={Placeholder["access"]}
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
export default ResourceForm;
