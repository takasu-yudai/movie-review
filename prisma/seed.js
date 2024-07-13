// prisma/seed.ts
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const movies = [
    {
      title: "インセプション",
      detail: "夢の中での盗みという斬新なコンセプトを描いた作品。",
      releaseDate: "2010-07-16",
    },
    {
      title: "インターステラー",
      detail: "宇宙を舞台にした時間と愛をテーマにした映画。",
      releaseDate: "2014-11-07",
    },
    {
      title: "ダークナイト",
      detail: "ゴッサムシティを舞台にしたアクション満載の映画。",
      releaseDate: "2008-07-18",
    },
    {
      title: "ジョーカー",
      detail: "一人の男の狂気に満ちた変貌を描いた映画。",
      releaseDate: "2019-10-04",
    },
    {
      title: "ファイトクラブ",
      detail: "秘密のクラブを通じて自我を探求する物語。",
      releaseDate: "1999-10-15",
    },
    {
      title: "マトリックス",
      detail: "現実と仮想現実の間で繰り広げられる壮大な戦い。",
      releaseDate: "1999-03-31",
    },
    {
      title: "フォレスト・ガンプ",
      detail: "一人の男の不思議な人生を描いた感動作。",
      releaseDate: "1994-07-06",
    },
    {
      title: "ラ・ラ・ランド",
      detail: "夢を追いかける若者たちのロマンチックな物語。",
      releaseDate: "2016-12-09",
    },
    {
      title: "パルプ・フィクション",
      detail: "入り組んだストーリーが特徴のクライム映画。",
      releaseDate: "1994-10-14",
    },
    {
      title: "セブン",
      detail: "緻密なプロットが魅力のサスペンススリラー。",
      releaseDate: "1995-09-22",
    },
    {
      title: "ショーシャンクの空に",
      detail: "刑務所を舞台にした人間ドラマ。",
      releaseDate: "1994-09-23",
    },
    {
      title: "グラディエーター",
      detail: "古代ローマを舞台にした壮大な歴史映画。",
      releaseDate: "2000-05-05",
    },
    {
      title: "レオン",
      detail: "孤独な殺し屋と少女の交流を描いた作品。",
      releaseDate: "1994-09-14",
    },
    {
      title: "アバター",
      detail: "異世界を舞台にした壮大なSFアドベンチャー。",
      releaseDate: "2009-12-18",
    },
    {
      title: "タイタニック",
      detail: "歴史上の悲劇をロマンチックに描いた映画。",
      releaseDate: "1997-12-19",
    },
    {
      title: "スターウォーズ",
      detail: "遠い銀河系を舞台にした叙事詩的な物語。",
      releaseDate: "1977-05-25",
    },
    {
      title: "ハリー・ポッター",
      detail: "魔法の世界で繰り広げられる若者たちの冒険。",
      releaseDate: "2001-11-16",
    },
    {
      title: "ロード・オブ・ザ・リング",
      detail: "中つ国を舞台にした壮大なファンタジー物語。",
      releaseDate: "2001-12-19",
    },
    {
      title: "ブラック・スワン",
      detail: "バレエダンサーの心理を深く掘り下げた作品。",
      releaseDate: "2010-12-17",
    },
    {
      title: "ソーシャル・ネットワーク",
      detail: "Facebook創設の裏話を描いた映画。",
      releaseDate: "2010-10-01",
    },
  ];

  for (const { title, detail, releaseDate } of movies) {
    await prisma.movie.create({
      data: {
        title: title,
        imageUrl: "https://picsum.photos/200/300/?blur",
        detail: detail,
        releaseDate: new Date(releaseDate),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
