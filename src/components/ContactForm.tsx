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
import { FieldValue, FieldValues, useForm } from "react-hook-form";

import { contactSchema, ContactSchemaType } from "@/lib/schema";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";

const Placeholder = {
  name: "joker Smith | jafer booking ltd",
  email: "example@mail.com",
  message: "i have a message for you",
};

const InputType = {
  name: "text",
  email: "email",
  message: "text",
};

const LabelText = {
  name: "Name",
  email: "Email",
  message: "Message",
};

const ContactForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (value: ContactSchemaType) => Promise<void>;
  defaultValues: object | FieldValue<FieldValues> | undefined;
}) => {
  const method = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, disabled },
  } = method;
  return (
    <Form {...method}>
      <form
        className="flex flex-col items-center w-full gap-y-4  py-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1 flex flex-col  w-full h-full gap-y-4">
          <FormField
            control={control}
            name={"name"}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{LabelText["name"]}</FormLabel>
                <FormControl>
                  <Input
                    type={InputType["name"]}
                    className="placeholder:text-foreground/50"
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
            name={"message"}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{LabelText["message"]}</FormLabel>
                <FormControl>
                  <Textarea
                    className="placeholder:text-foreground/50 min-h-44"
                    placeholder={Placeholder["message"]}
                    rows={15}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={disabled}
          type="submit"
          className="cursor-pointer w-full"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};
export default ContactForm;
