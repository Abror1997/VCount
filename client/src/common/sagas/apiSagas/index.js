import User from '../../api/User/sagas'
import Admin from '../../api/Admin/sagas';

export default function sagas (api) {
    return [
        User(api),
        Admin(api)
    ]
}
