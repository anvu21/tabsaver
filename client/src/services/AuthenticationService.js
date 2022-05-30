import Api from '@/services/Api'
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }

}
/* AuthenthicationService.register({
    email: 'test@gmail.com',
    password: '12356'
}) */
