interface User {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: Array<User>): Array<string> {
  const arr: Array<string> = []
  if (users.length < 1) {
    return arr
  }
  users.forEach((user) => {
    if (user && !arr.includes(user.email)) {
      arr.push(user.email)
    }
  })
  return arr
}
