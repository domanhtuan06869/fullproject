const TYPE = {
  ERROR: 'error',
  WARN: 'warning',
  INFO: 'info',
  QUESTION: 'question',
  PROGRESS: 'progress',
  QUESTION_MULTIPLE_CHOICE: 'question_multiple_choice'
};

module.exports = {
  M001: {
    message: 'Kiểm tra lại mật khẩu',
    title: 'Thông báo',
    btnConfirm: 'OK',
    type: TYPE.WARN,
  },
  M002: {
    message: 'Đăng nhập có lỗi kiểm tra lại',
    title: 'Thông báo',
    btnConfirm: 'OK',
    type: TYPE.WARN,
  },
}