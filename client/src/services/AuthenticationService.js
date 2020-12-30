import Api from '@/services/Api'

export default {
  register (credenials) {
    return Api().post('register', credenials)
  }
}

// AuthenticationService.register({
//  email : "test123@mail.com",
//  password: "1234"
// });
