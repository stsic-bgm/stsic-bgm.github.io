const messages = [
  'お疲れさまです！',
  '頑張りましょう！',
  'ファイト！',
  '頑張って！',
  '全力で突っ走れ！',
  '努力は裏切らない！',
  '最後まで諦めるな！',
  '自分を信じて。',
  '今日も頑張りましょう。',
  '君ならできる！'
];
const messageNo = Math.floor(Math.random() * messages.length);
document.write(messages[messageNo]);