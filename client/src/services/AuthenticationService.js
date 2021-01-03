import Api from '@/services/Api'

export default {
  register (credenials) {
    return Api().post('register', credenials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// AuthenticationService.register({
//  email : "test123@mail.com",
//  password: "1234"
// });
