import { g, auth, config } from "@grafbase/sdk";

// const post = g
//   .model("Post", {
//     title: g.string(),
//     slug: g.string().unique(),
//     content: g.string().optional(),
//     publishedAt: g.datetime().optional(),
//     comments: g
//       .relation(() => comment)
//       .optional()
//       .list()
//       .optional(),
//     likes: g.int().default(0),
//     tags: g.string().optional().list().length({ max: 5 }),
//     author: g.relation(() => user).optional(),
//   })
//   .search();

// const comment = g.model("Comment", {
//   post: g.relation(post),
//   body: g.string(),
//   likes: g.int().default(0),
//   author: g.relation(() => user).optional(),
// });

const user = g.model("User", {
  username: g.string().length({ min: 2, max: 40 }).optional(),
  email: g.string().unique(),
  password: g.string().optional(),
  avatarUrl: g.string().default(""),
  role: g.string().default("admin"), // admin customer poster
  status: g.string().default("active"),
  // posts: g
  //   .relation(() => post)
  //   .optional()
  //   .list()
  //   .optional(),
  // comments: g.relation(comment).optional().list().optional(),
});

const otp = g
  .model("Otp", {
    code: g.string(),
    type: g.string(),
    verified: g.boolean().default(false),
    email: g.string(),
    expireAt: g.datetime(),
  })
  .search()
  .auth((rules) => {
    rules.public().read();
  });

export default config({
  schema: g,
});
