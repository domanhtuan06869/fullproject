const TYPE = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  QUESTION: 'question',
  PROGRESS: 'progress',
  QUESTION_MULTIPLE_CHOICE: 'question_multiple_choice'
};

module.exports = {
  M001: {
    CD005: {
      content: 'Kiểm tra lại mật khẩu',
      title: 'Thông báo',
      btnConfirm: 'OK',
      type: TYPE.WARN,
    },
  }
}