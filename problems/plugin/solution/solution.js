module.exports = function math () {
  this.add({role:'math', cmd:'sum'}, (msg, respond) => {
    var sum = msg.left + msg.right
    respond(null, {answer: sum})
  })
  return 'operations'
}
