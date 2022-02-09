export const QUERYUSER = `select * from users`
// 校验用户
export const VERIFYUSER = `select id, username, password, email, phone_no from users where email = ?`

// 文章
export const articleSql = {
  ARTICLELIST: `SELECT 
  a.article_id AS articleId, a.article_title AS articleTitle, a.article_content AS articleContent,
  a.code, a.publish_time AS publishTime, a.user_id AS authorId, 
  c.comment_id AS commentId, c.content AS commentContent, c.from_user_id AS commentUserId,
  t.thumb_id AS thumbId, t.user_id AS thumbUserId,
  u.id AS userId, u.username, u.email, u.phone_no AS phoneNo 
  FROM articles a LEFT JOIN comments c ON a.article_id = c.compose_id AND c.compose_type = 1
  LEFT JOIN thumbs t ON a.article_id = t.type_id AND t.thumb_type = 1 AND t.status = 1
  LEFT JOIN users u ON t.user_id = u.id
  `
}
