import { Textarea } from "@/components/ui/textarea";
import { React } from "react";
import { DatePickerDemo } from "./calender";
import { ComboboxDemo } from "./combobox";

export default function CreateCard() {
  return (
    <>
      <div className="flex max-w-screen-md p-4 m-4">
        <Textarea placeholder="レビューを入力してください" name="comment" />
      </div>
      <div className="flex max-w-screen-md p-4 m-4">
        <ComboboxDemo />
      </div>
      <div className="flex max-w-screen-md p-4 m-4">
        <DatePickerDemo />
      </div>
    </>
  );
}
