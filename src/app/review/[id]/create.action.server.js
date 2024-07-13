// app/review/[id]/create.action.server.js
"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function reviewPost(id, formData) {
  const comment = formData.get("comment");
  const rating = formData.get("rating");
  // const movieId = formData.get("movieId");
  const reviewDate = formData.get("created_at");
  console.log("formData" + formData.get("id"));
  console.log("comment" + comment);
  console.log("rating" + rating);
  console.log("reviewDate" + reviewDate);

  // データベースにレビューを保存
  const review = await prisma.review.create({
    data: {
      movieId: +id, // 文字列を数値に変換
      rating: +rating, // 適宜キャストする
      comment: comment,
    },
  });

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
