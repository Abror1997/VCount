import changeStatus from './changeStatus'
import changeUsername from './changeUsername'
import generalBadge from './generalBadge'
import setFcmToken from './setFcmToken'
import login from './login'
import register from './register'

export default function sagas (api) {
  return [

    changeStatus(api),
    changeUsername(api),
    generalBadge(api),
    setFcmToken(api),
    login(api),
    register(api)
  ]
}
