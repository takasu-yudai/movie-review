"use client";

import { reviewPost } from "../create.action.server";
import ReviewForm from "@/app/ui/components/reviewForm";

export default function ReviewCreate({ params: { id } }) {
  console.log(id);
  const reviewPostWithID = reviewPost.bind(null, id);
  return (
    <form action={reviewPostWithID}>
      <ReviewForm />
    </form>
  );
}
